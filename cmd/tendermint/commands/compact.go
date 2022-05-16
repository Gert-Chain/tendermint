package commands

import (
	"path/filepath"

	"github.com/spf13/cobra"
	"github.com/syndtr/goleveldb/leveldb"
	"github.com/syndtr/goleveldb/leveldb/opt"
	"github.com/syndtr/goleveldb/leveldb/util"

	"github.com/tendermint/tendermint/config"
	"github.com/tendermint/tendermint/libs/log"
)

func MakeCompactDBCommand(cfg *config.Config, logger log.Logger) *cobra.Command {
	cmd := &cobra.Command{
		Use:   "experimental-compact-db",
		Short: "force compacts the tendermint storage engine (only GoLevelDB supported)",
		Long: `
This is a temporary utility command that performs a force compaction on the state 
and blockstores to reduce disk space for a pruning node. This should only be run 
once the node has stopped. This command will likely be omitted in the future after
the planned refactor to the storage engine.

Currently, only GoLevelDB is supported.
	`,
		Run: func(cmd *cobra.Command, args []string) {
			if cfg.DBBackend != "goleveldb" {
				logger.Info("compaction is currently only supported with goleveldb")
				return
			}

			dbNames := []string{"state", "blockstore"}
			o := &opt.Options{
				DisableSeeksCompaction: true,
			}
			for _, dbName := range dbNames {
				go func() {
					dbPath := filepath.Join(cfg.DBDir(), dbName+".db")
					store, err := leveldb.OpenFile(dbPath, o)
					if err != nil {
						logger.Error("failed to initialize tendermint db", "name", dbName, "err", err)
						return
					}
					err = store.CompactRange(util.Range{Start: nil, Limit: nil})
					if err != nil {
						logger.Error("failed to compact tendermint db", "name", dbName, "err", err)
					}
				}()
			}
		},
	}

	return cmd
}
