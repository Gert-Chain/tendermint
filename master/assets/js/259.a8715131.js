(window.webpackJsonp=window.webpackJsonp||[]).push([[259],{833:function(e,t,a){"use strict";a.r(t);var n=a(1),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("The mempool is a in memory pool of potentially valid transactions,\nboth to broadcast to other nodes, as well as to provide to the\nconsensus reactor when it is selected as the block proposer.")]),e._v(" "),a("p",[e._v("There are two sides to the mempool state:")]),e._v(" "),a("ul",[a("li",[e._v("External: get, check, and broadcast new transactions")]),e._v(" "),a("li",[e._v("Internal: return valid transaction, update list after block commit")])]),e._v(" "),a("h2",{attrs:{id:"external-functionality"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#external-functionality"}},[e._v("#")]),e._v(" External functionality")]),e._v(" "),a("p",[e._v("External functionality is exposed via network interfaces\nto potentially untrusted actors.")]),e._v(" "),a("ul",[a("li",[e._v("CheckTx - triggered via RPC or P2P")]),e._v(" "),a("li",[e._v("Broadcast - gossip messages after a successful check")])]),e._v(" "),a("h2",{attrs:{id:"internal-functionality"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#internal-functionality"}},[e._v("#")]),e._v(" Internal functionality")]),e._v(" "),a("p",[e._v("Internal functionality is exposed via method calls to other\ncode compiled into the tendermint binary.")]),e._v(" "),a("ul",[a("li",[e._v("ReapMaxBytesMaxGas - get txs to propose in the next block. Guarantees that the\nsize of the txs is less than MaxBytes, and gas is less than MaxGas")]),e._v(" "),a("li",[e._v("Update - remove tx that were included in last block")]),e._v(" "),a("li",[e._v("ABCI.CheckTx - call ABCI app to validate the tx")])]),e._v(" "),a("p",[e._v("What does it provide the consensus reactor?\nWhat guarantees does it need from the ABCI app?\n(talk about interleaving processes in concurrency)")]),e._v(" "),a("h2",{attrs:{id:"optimizations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#optimizations"}},[e._v("#")]),e._v(" Optimizations")]),e._v(" "),a("p",[e._v("The implementation within this library also implements a tx cache.\nThis is so that signatures don't have to be reverified if the tx has\nalready been seen before.\nHowever, we only store valid txs in the cache, not invalid ones.\nThis is because invalid txs could become good later.\nTxs that are included in a block aren't removed from the cache,\nas they still may be getting received over the p2p network.\nThese txs are stored in the cache by their hash, to mitigate memory concerns.")]),e._v(" "),a("p",[e._v("Applications should implement replay protection, read "),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/8cdaa7f515a9d366bbc9f0aff2a263a1a6392ead/docs/app-dev/app-development.md#replay-protection",target:"_blank",rel:"noopener noreferrer"}},[e._v("Replay\nProtection"),a("OutboundLink")],1),e._v(" for more information.")]),e._v(" "),a("h2",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),a("p",[e._v("The mempool has various configurable paramet")]),e._v(" "),a("p",[e._v("Sending incorrectly encoded data or data exceeding "),a("code",[e._v("maxMsgSize")]),e._v(" will result\nin stopping the peer.")]),e._v(" "),a("p",[a("code",[e._v("maxMsgSize")]),e._v(" equals "),a("code",[e._v("MaxBatchBytes")]),e._v(" (10MB) + 4 (proto overhead).\n"),a("code",[e._v("MaxBatchBytes")]),e._v(" is a mempool config parameter -> defined locally. The reactor\nsends transactions to the connected peers in batches. The maximum size of one\nbatch is "),a("code",[e._v("MaxBatchBytes")]),e._v(".")]),e._v(" "),a("p",[e._v("The mempool will not send a tx back to any peer which it received it from.")]),e._v(" "),a("p",[e._v("The reactor assigns an "),a("code",[e._v("uint16")]),e._v(" number for each peer and maintains a map from\np2p.ID to "),a("code",[e._v("uint16")]),e._v(". Each mempool transaction carries a list of all the senders\n("),a("code",[e._v("[]uint16")]),e._v("). The list is updated every time mempool receives a transaction it\nis already seen. "),a("code",[e._v("uint16")]),e._v(" assumes that a node will never have over 65535 active\npeers (0 is reserved for unknown source - e.g. RPC).")])])}),[],!1,null,null,null);t.default=o.exports}}]);