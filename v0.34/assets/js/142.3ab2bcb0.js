(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{751:function(e,t,a){"use strict";a.r(t);var i=a(1),n=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"adr-078-non-zero-genesis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adr-078-non-zero-genesis"}},[e._v("#")]),e._v(" ADR 078: Non-Zero Genesis")]),e._v(" "),a("h2",{attrs:{id:"changelog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),a("ul",[a("li",[e._v("2020-07-26: Initial draft (@erikgrinaker)")]),e._v(" "),a("li",[e._v("2020-07-28: Use weak chain linking, i.e. "),a("code",[e._v("predecessor")]),e._v(" field (@erikgrinaker)")]),e._v(" "),a("li",[e._v("2020-07-31: Drop chain linking (@erikgrinaker)")]),e._v(" "),a("li",[e._v("2020-08-03: Add "),a("code",[e._v("State.InitialHeight")]),e._v(" (@erikgrinaker)")]),e._v(" "),a("li",[e._v("2021-02-11: Migrate to tendermint repo (Originally "),a("a",{attrs:{href:"https://github.com/tendermint/spec/pull/119",target:"_blank",rel:"noopener noreferrer"}},[e._v("RFC 002"),a("OutboundLink")],1),e._v(")")])]),e._v(" "),a("h2",{attrs:{id:"author-s"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#author-s"}},[e._v("#")]),e._v(" Author(s)")]),e._v(" "),a("ul",[a("li",[e._v("Erik Grinaker (@erikgrinaker)")])]),e._v(" "),a("h2",{attrs:{id:"context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),a("p",[e._v("The recommended upgrade path for block protocol-breaking upgrades is currently to hard fork the\nchain (see e.g. "),a("a",{attrs:{href:"https://blog.cosmos.network/cosmos-hub-3-upgrade-announcement-39c9da941aee",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("cosmoshub-3")]),e._v(" upgrade"),a("OutboundLink")],1),e._v(".\nThis is done by halting all validators at a predetermined height, exporting the application\nstate via application-specific tooling, and creating an entirely new chain using the exported\napplication state.")]),e._v(" "),a("p",[e._v("As far as Tendermint is concerned, the upgraded chain is a completely separate chain, with e.g.\na new chain ID and genesis file. Notably, the new chain starts at height 1, and has none of the\nold chain's block history. This causes problems for integrators, e.g. coin exchanges and\nwallets, that assume a monotonically increasing height for a given blockchain. Users also find\nit confusing that a given height can now refer to distinct states depending on the chain\nversion.")]),e._v(" "),a("p",[e._v("An ideal solution would be to always retain block backwards compatibility in such a way that chain\nhistory is never lost on upgrades. However, this may require a significant amount of engineering\nwork that is not viable for the planned Stargate release (Tendermint 0.34), and may prove too\nrestrictive for future development.")]),e._v(" "),a("p",[e._v("As a first step, allowing the new chain to start from an initial height specified in the genesis\nfile would at least provide monotonically increasing heights. There was a proposal to include the\nlast block header of the previous chain as well, but since the genesis file is not verified and\nhashed (only specific fields are) this would not be trustworthy.")]),e._v(" "),a("p",[e._v("External tooling will be required to map historical heights onto e.g. archive nodes that contain\nblocks from previous chain version. Tendermint will not include any such functionality.")]),e._v(" "),a("h2",{attrs:{id:"proposal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proposal"}},[e._v("#")]),e._v(" Proposal")]),e._v(" "),a("p",[e._v("Tendermint will allow chains to start from an arbitrary initial height:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("A new field "),a("code",[e._v("initial_height")]),e._v(" is added to the genesis file, defaulting to "),a("code",[e._v("1")]),e._v(". It can be set to any\nnon-negative integer, and "),a("code",[e._v("0")]),e._v(" is considered equivalent to "),a("code",[e._v("1")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("A new field "),a("code",[e._v("InitialHeight")]),e._v(" is added to the ABCI "),a("code",[e._v("RequestInitChain")]),e._v(" message, with the same value\nand semantics as the genesis field.")])]),e._v(" "),a("li",[a("p",[e._v("A new field "),a("code",[e._v("InitialHeight")]),e._v(" is added to the "),a("code",[e._v("state.State")]),e._v(" struct, where "),a("code",[e._v("0")]),e._v(" is considered invalid.\nIncluding the field here simplifies implementation, since the genesis value does not have to be\npropagated throughout the code base separately, but it is not strictly necessary.")])])]),e._v(" "),a("p",[e._v("ABCI applications may have to be updated to handle arbitrary initial heights, otherwise the initial\nblock may fail.")]),e._v(" "),a("h2",{attrs:{id:"status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),a("p",[e._v("Implemented")]),e._v(" "),a("h2",{attrs:{id:"consequences"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),a("h3",{attrs:{id:"positive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),a("ul",[a("li",[e._v('Heights can be unique throughout the history of a "logical" chain, across hard fork upgrades.')])]),e._v(" "),a("h3",{attrs:{id:"negative"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Upgrades still cause loss of block history.")])]),e._v(" "),a("li",[a("p",[e._v("Integrators will have to map height ranges to specific archive nodes/networks to query history.")])])]),e._v(" "),a("h3",{attrs:{id:"neutral"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),a("ul",[a("li",[e._v("There is no explicit link to the last block of the previous chain.")])]),e._v(" "),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/2543",target:"_blank",rel:"noopener noreferrer"}},[e._v("#2543: Allow genesis file to start from non-zero height w/ prev block header"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=n.exports}}]);