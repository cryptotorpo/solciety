"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3999],
  {
    27158: function (e, t, r) {
      r.r(t),
        r.d(t, {
          Account: function () {
            return K;
          },
          AddressLookupTableAccount: function () {
            return e$;
          },
          AddressLookupTableInstruction: function () {
            return r_;
          },
          AddressLookupTableProgram: function () {
            return rA;
          },
          Authorized: function () {
            return rW;
          },
          BLOCKHASH_CACHE_TIMEOUT_MS: function () {
            return eZ;
          },
          BPF_LOADER_DEPRECATED_PROGRAM_ID: function () {
            return N;
          },
          BPF_LOADER_PROGRAM_ID: function () {
            return eN;
          },
          BpfLoader: function () {
            return ez;
          },
          COMPUTE_BUDGET_INSTRUCTION_LAYOUTS: function () {
            return rv;
          },
          ComputeBudgetInstruction: function () {
            return rP;
          },
          ComputeBudgetProgram: function () {
            return rE;
          },
          Connection: function () {
            return rw;
          },
          Ed25519Program: function () {
            return rT;
          },
          Enum: function () {
            return R;
          },
          EpochSchedule: function () {
            return eV;
          },
          FeeCalculatorLayout: function () {
            return ev;
          },
          Keypair: function () {
            return rS;
          },
          LAMPORTS_PER_SOL: function () {
            return r2;
          },
          LOOKUP_TABLE_INSTRUCTION_LAYOUTS: function () {
            return rI;
          },
          Loader: function () {
            return eK;
          },
          Lockup: function () {
            return rK;
          },
          MAX_SEED_LENGTH: function () {
            return x;
          },
          Message: function () {
            return et;
          },
          MessageAccountKeys: function () {
            return D;
          },
          MessageV0: function () {
            return er;
          },
          NONCE_ACCOUNT_LENGTH: function () {
            return eB;
          },
          NonceAccount: function () {
            return eT;
          },
          PACKET_DATA_SIZE: function () {
            return z;
          },
          PUBLIC_KEY_LENGTH: function () {
            return L;
          },
          PublicKey: function () {
            return W;
          },
          SIGNATURE_LENGTH_IN_BYTES: function () {
            return U;
          },
          SOLANA_SCHEMA: function () {
            return C;
          },
          STAKE_CONFIG_ID: function () {
            return rO;
          },
          STAKE_INSTRUCTION_LAYOUTS: function () {
            return rz;
          },
          SYSTEM_INSTRUCTION_LAYOUTS: function () {
            return eL;
          },
          SYSVAR_CLOCK_PUBKEY: function () {
            return el;
          },
          SYSVAR_EPOCH_SCHEDULE_PUBKEY: function () {
            return ed;
          },
          SYSVAR_INSTRUCTIONS_PUBKEY: function () {
            return eh;
          },
          SYSVAR_RECENT_BLOCKHASHES_PUBKEY: function () {
            return eg;
          },
          SYSVAR_RENT_PUBKEY: function () {
            return ep;
          },
          SYSVAR_REWARDS_PUBKEY: function () {
            return ey;
          },
          SYSVAR_SLOT_HASHES_PUBKEY: function () {
            return eb;
          },
          SYSVAR_SLOT_HISTORY_PUBKEY: function () {
            return em;
          },
          SYSVAR_STAKE_HISTORY_PUBKEY: function () {
            return ef;
          },
          Secp256k1Program: function () {
            return rL;
          },
          SendTransactionError: function () {
            return ek;
          },
          SolanaJSONRPCError: function () {
            return eS;
          },
          SolanaJSONRPCErrorCode: function () {
            return ew;
          },
          StakeAuthorizationLayout: function () {
            return rq;
          },
          StakeInstruction: function () {
            return rN;
          },
          StakeProgram: function () {
            return rU;
          },
          Struct: function () {
            return T;
          },
          SystemInstruction: function () {
            return ex;
          },
          SystemProgram: function () {
            return eO;
          },
          Transaction: function () {
            return eo;
          },
          TransactionExpiredBlockheightExceededError: function () {
            return M;
          },
          TransactionExpiredNonceInvalidError: function () {
            return V;
          },
          TransactionExpiredTimeoutError: function () {
            return J;
          },
          TransactionInstruction: function () {
            return ea;
          },
          TransactionMessage: function () {
            return ec;
          },
          TransactionStatus: function () {
            return ei;
          },
          VALIDATOR_INFO_KEY: function () {
            return r$;
          },
          VERSION_PREFIX_MASK: function () {
            return q;
          },
          VOTE_PROGRAM_ID: function () {
            return rY;
          },
          ValidatorInfo: function () {
            return rj;
          },
          VersionedMessage: function () {
            return en;
          },
          VersionedTransaction: function () {
            return eu;
          },
          VoteAccount: function () {
            return rX;
          },
          VoteAuthorizationLayout: function () {
            return rD;
          },
          VoteInit: function () {
            return rM;
          },
          VoteInstruction: function () {
            return rJ;
          },
          VoteProgram: function () {
            return rH;
          },
          clusterApiUrl: function () {
            return r1;
          },
          sendAndConfirmRawTransaction: function () {
            return r8;
          },
          sendAndConfirmTransaction: function () {
            return eI;
          },
        });
      var n,
        i,
        s = r(48834),
        a = r(70978),
        o = r(62197),
        c = r.n(o),
        u = r(12833),
        l = r.n(u),
        d = r(53929),
        h = r(83871),
        g = r(96346),
        p = r(41528),
        y = r(29249),
        b = r(87414),
        m = r.n(b),
        f = r(88771),
        k = r(20435),
        w = r(48796),
        S = r(80890);
      let I = a.UN.utils.randomPrivateKey,
        _ = () => {
          let e = a.UN.utils.randomPrivateKey(),
            t = A(e),
            r = new Uint8Array(64);
          return r.set(e), r.set(t, 32), { publicKey: t, secretKey: r };
        },
        A = a.UN.getPublicKey;
      function P(e) {
        try {
          return a.UN.ExtendedPoint.fromHex(e), !0;
        } catch {
          return !1;
        }
      }
      let v = (e, t) => a.UN.sign(e, t.slice(0, 32)),
        E = a.UN.verify,
        B = (e) =>
          s.Buffer.isBuffer(e)
            ? e
            : e instanceof Uint8Array
            ? s.Buffer.from(e.buffer, e.byteOffset, e.byteLength)
            : s.Buffer.from(e);
      class T {
        constructor(e) {
          Object.assign(this, e);
        }
        encode() {
          return s.Buffer.from((0, h.serialize)(C, this));
        }
        static decode(e) {
          return (0, h.deserialize)(C, this, e);
        }
        static decodeUnchecked(e) {
          return (0, h.deserializeUnchecked)(C, this, e);
        }
      }
      class R extends T {
        constructor(e) {
          if ((super(e), (this.enum = ""), 1 !== Object.keys(e).length))
            throw Error("Enum can only take single value");
          Object.keys(e).map((e) => {
            this.enum = e;
          });
        }
      }
      let C = new Map(),
        x = 32,
        L = 32,
        O = 1;
      class W extends T {
        constructor(e) {
          if ((super({}), (this._bn = void 0), void 0 !== e._bn))
            this._bn = e._bn;
          else {
            if ("string" == typeof e) {
              let t = l().decode(e);
              if (t.length != L) throw Error("Invalid public key input");
              this._bn = new (c())(t);
            } else this._bn = new (c())(e);
            if (this._bn.byteLength() > L)
              throw Error("Invalid public key input");
          }
        }
        static unique() {
          let e = new W(O);
          return (O += 1), new W(e.toBuffer());
        }
        equals(e) {
          return this._bn.eq(e._bn);
        }
        toBase58() {
          return l().encode(this.toBytes());
        }
        toJSON() {
          return this.toBase58();
        }
        toBytes() {
          let e = this.toBuffer();
          return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
        }
        toBuffer() {
          let e = this._bn.toArrayLike(s.Buffer);
          if (e.length === L) return e;
          let t = s.Buffer.alloc(32);
          return e.copy(t, 32 - e.length), t;
        }
        get [Symbol.toStringTag]() {
          return `PublicKey(${this.toString()})`;
        }
        toString() {
          return this.toBase58();
        }
        static async createWithSeed(e, t, r) {
          let n = s.Buffer.concat([
            e.toBuffer(),
            s.Buffer.from(t),
            r.toBuffer(),
          ]);
          return new W((0, d.J)(n));
        }
        static createProgramAddressSync(e, t) {
          let r = s.Buffer.alloc(0);
          e.forEach(function (e) {
            if (e.length > x) throw TypeError("Max seed length exceeded");
            r = s.Buffer.concat([r, B(e)]);
          }),
            (r = s.Buffer.concat([
              r,
              t.toBuffer(),
              s.Buffer.from("ProgramDerivedAddress"),
            ]));
          let n = (0, d.J)(r);
          if (P(n))
            throw Error("Invalid seeds, address must fall off the curve");
          return new W(n);
        }
        static async createProgramAddress(e, t) {
          return this.createProgramAddressSync(e, t);
        }
        static findProgramAddressSync(e, t) {
          let r,
            n = 255;
          for (; 0 != n; ) {
            try {
              let i = e.concat(s.Buffer.from([n]));
              r = this.createProgramAddressSync(i, t);
            } catch (e) {
              if (e instanceof TypeError) throw e;
              n--;
              continue;
            }
            return [r, n];
          }
          throw Error("Unable to find a viable program address nonce");
        }
        static async findProgramAddress(e, t) {
          return this.findProgramAddressSync(e, t);
        }
        static isOnCurve(e) {
          return P(new W(e).toBytes());
        }
      }
      (W.default = new W("11111111111111111111111111111111")),
        C.set(W, { kind: "struct", fields: [["_bn", "u256"]] });
      class K {
        constructor(e) {
          if (((this._publicKey = void 0), (this._secretKey = void 0), e)) {
            let t = B(e);
            if (64 !== e.length) throw Error("bad secret key size");
            (this._publicKey = t.slice(32, 64)),
              (this._secretKey = t.slice(0, 32));
          } else
            (this._secretKey = B(I())),
              (this._publicKey = B(A(this._secretKey)));
        }
        get publicKey() {
          return new W(this._publicKey);
        }
        get secretKey() {
          return s.Buffer.concat([this._secretKey, this._publicKey], 64);
        }
      }
      let N = new W("BPFLoader1111111111111111111111111111111111"),
        z = 1232,
        q = 127,
        U = 64;
      class M extends Error {
        constructor(e) {
          super(`Signature ${e} has expired: block height exceeded.`),
            (this.signature = void 0),
            (this.signature = e);
        }
      }
      Object.defineProperty(M.prototype, "name", {
        value: "TransactionExpiredBlockheightExceededError",
      });
      class J extends Error {
        constructor(e, t) {
          super(
            `Transaction was not confirmed in ${t.toFixed(
              2
            )} seconds. It is unknown if it succeeded or failed. Check signature ${e} using the Solana Explorer or CLI tools.`
          ),
            (this.signature = void 0),
            (this.signature = e);
        }
      }
      Object.defineProperty(J.prototype, "name", {
        value: "TransactionExpiredTimeoutError",
      });
      class V extends Error {
        constructor(e) {
          super(`Signature ${e} has expired: the nonce is no longer valid.`),
            (this.signature = void 0),
            (this.signature = e);
        }
      }
      Object.defineProperty(V.prototype, "name", {
        value: "TransactionExpiredNonceInvalidError",
      });
      class D {
        constructor(e, t) {
          (this.staticAccountKeys = void 0),
            (this.accountKeysFromLookups = void 0),
            (this.staticAccountKeys = e),
            (this.accountKeysFromLookups = t);
        }
        keySegments() {
          let e = [this.staticAccountKeys];
          return (
            this.accountKeysFromLookups &&
              (e.push(this.accountKeysFromLookups.writable),
              e.push(this.accountKeysFromLookups.readonly)),
            e
          );
        }
        get(e) {
          for (let t of this.keySegments()) {
            if (e < t.length) return t[e];
            e -= t.length;
          }
        }
        get length() {
          return this.keySegments().flat().length;
        }
        compileInstructions(e) {
          if (this.length > 256)
            throw Error(
              "Account index overflow encountered during compilation"
            );
          let t = new Map();
          this.keySegments()
            .flat()
            .forEach((e, r) => {
              t.set(e.toBase58(), r);
            });
          let r = (e) => {
            let r = t.get(e.toBase58());
            if (void 0 === r)
              throw Error(
                "Encountered an unknown instruction account key during compilation"
              );
            return r;
          };
          return e.map((e) => ({
            programIdIndex: r(e.programId),
            accountKeyIndexes: e.keys.map((e) => r(e.pubkey)),
            data: e.data,
          }));
        }
      }
      let H = (e = "publicKey") => g.Ik(32, e),
        $ = (e = "signature") => g.Ik(64, e),
        F = (e = "string") => {
          let t = g.n_(
              [
                g.Jq("length"),
                g.Jq("lengthPadding"),
                g.Ik(g.cv(g.Jq(), -8), "chars"),
              ],
              e
            ),
            r = t.decode.bind(t),
            n = t.encode.bind(t);
          return (
            (t.decode = (e, t) => r(e, t).chars.toString()),
            (t.encode = (e, t, r) =>
              n({ chars: s.Buffer.from(e, "utf8") }, t, r)),
            (t.alloc = (e) =>
              g.Jq().span + g.Jq().span + s.Buffer.from(e, "utf8").length),
            t
          );
        };
      function j(e) {
        let t = 0,
          r = 0;
        for (;;) {
          let n = e.shift();
          if (((t |= (127 & n) << (7 * r)), (r += 1), (128 & n) == 0)) break;
        }
        return t;
      }
      function Y(e, t) {
        let r = t;
        for (;;) {
          let t = 127 & r;
          if (0 == (r >>= 7)) {
            e.push(t);
            break;
          }
          (t |= 128), e.push(t);
        }
      }
      function G(e, t) {
        if (!e) throw Error(t || "Assertion failed");
      }
      class X {
        constructor(e, t) {
          (this.payer = void 0),
            (this.keyMetaMap = void 0),
            (this.payer = e),
            (this.keyMetaMap = t);
        }
        static compile(e, t) {
          let r = new Map(),
            n = (e) => {
              let t = e.toBase58(),
                n = r.get(t);
              return (
                void 0 === n &&
                  ((n = { isSigner: !1, isWritable: !1, isInvoked: !1 }),
                  r.set(t, n)),
                n
              );
            },
            i = n(t);
          for (let t of ((i.isSigner = !0), (i.isWritable = !0), e))
            for (let e of ((n(t.programId).isInvoked = !0), t.keys)) {
              let t = n(e.pubkey);
              (t.isSigner ||= e.isSigner), (t.isWritable ||= e.isWritable);
            }
          return new X(t, r);
        }
        getMessageComponents() {
          let e = [...this.keyMetaMap.entries()];
          G(e.length <= 256, "Max static account keys length exceeded");
          let t = e.filter(([, e]) => e.isSigner && e.isWritable),
            r = e.filter(([, e]) => e.isSigner && !e.isWritable),
            n = e.filter(([, e]) => !e.isSigner && e.isWritable),
            i = e.filter(([, e]) => !e.isSigner && !e.isWritable),
            s = {
              numRequiredSignatures: t.length + r.length,
              numReadonlySignedAccounts: r.length,
              numReadonlyUnsignedAccounts: i.length,
            };
          {
            G(t.length > 0, "Expected at least one writable signer key");
            let [e] = t[0];
            G(
              e === this.payer.toBase58(),
              "Expected first writable signer key to be the fee payer"
            );
          }
          return [
            s,
            [
              ...t.map(([e]) => new W(e)),
              ...r.map(([e]) => new W(e)),
              ...n.map(([e]) => new W(e)),
              ...i.map(([e]) => new W(e)),
            ],
          ];
        }
        extractTableLookup(e) {
          let [t, r] = this.drainKeysFoundInLookupTable(
              e.state.addresses,
              (e) => !e.isSigner && !e.isInvoked && e.isWritable
            ),
            [n, i] = this.drainKeysFoundInLookupTable(
              e.state.addresses,
              (e) => !e.isSigner && !e.isInvoked && !e.isWritable
            );
          if (0 !== t.length || 0 !== n.length)
            return [
              { accountKey: e.key, writableIndexes: t, readonlyIndexes: n },
              { writable: r, readonly: i },
            ];
        }
        drainKeysFoundInLookupTable(e, t) {
          let r = [],
            n = [];
          for (let [i, s] of this.keyMetaMap.entries())
            if (t(s)) {
              let t = new W(i),
                s = e.findIndex((e) => e.equals(t));
              s >= 0 &&
                (G(s < 256, "Max lookup table index exceeded"),
                r.push(s),
                n.push(t),
                this.keyMetaMap.delete(i));
            }
          return [r, n];
        }
      }
      let Z = "Reached end of buffer unexpectedly";
      function Q(e) {
        if (0 === e.length) throw Error(Z);
        return e.shift();
      }
      function ee(e, ...t) {
        let [r] = t;
        if (2 === t.length ? r + (t[1] ?? 0) > e.length : r >= e.length)
          throw Error(Z);
        return e.splice(...t);
      }
      class et {
        constructor(e) {
          (this.header = void 0),
            (this.accountKeys = void 0),
            (this.recentBlockhash = void 0),
            (this.instructions = void 0),
            (this.indexToProgramIds = new Map()),
            (this.header = e.header),
            (this.accountKeys = e.accountKeys.map((e) => new W(e))),
            (this.recentBlockhash = e.recentBlockhash),
            (this.instructions = e.instructions),
            this.instructions.forEach((e) =>
              this.indexToProgramIds.set(
                e.programIdIndex,
                this.accountKeys[e.programIdIndex]
              )
            );
        }
        get version() {
          return "legacy";
        }
        get staticAccountKeys() {
          return this.accountKeys;
        }
        get compiledInstructions() {
          return this.instructions.map((e) => ({
            programIdIndex: e.programIdIndex,
            accountKeyIndexes: e.accounts,
            data: l().decode(e.data),
          }));
        }
        get addressTableLookups() {
          return [];
        }
        getAccountKeys() {
          return new D(this.staticAccountKeys);
        }
        static compile(e) {
          let [t, r] = X.compile(
              e.instructions,
              e.payerKey
            ).getMessageComponents(),
            n = new D(r)
              .compileInstructions(e.instructions)
              .map((e) => ({
                programIdIndex: e.programIdIndex,
                accounts: e.accountKeyIndexes,
                data: l().encode(e.data),
              }));
          return new et({
            header: t,
            accountKeys: r,
            recentBlockhash: e.recentBlockhash,
            instructions: n,
          });
        }
        isAccountSigner(e) {
          return e < this.header.numRequiredSignatures;
        }
        isAccountWritable(e) {
          let t = this.header.numRequiredSignatures;
          if (!(e >= this.header.numRequiredSignatures))
            return e < t - this.header.numReadonlySignedAccounts;
          {
            let r =
              this.accountKeys.length -
              t -
              this.header.numReadonlyUnsignedAccounts;
            return e - t < r;
          }
        }
        isProgramId(e) {
          return this.indexToProgramIds.has(e);
        }
        programIds() {
          return [...this.indexToProgramIds.values()];
        }
        nonProgramIds() {
          return this.accountKeys.filter((e, t) => !this.isProgramId(t));
        }
        serialize() {
          let e = this.accountKeys.length,
            t = [];
          Y(t, e);
          let r = this.instructions.map((e) => {
              let { accounts: t, programIdIndex: r } = e,
                n = Array.from(l().decode(e.data)),
                i = [];
              Y(i, t.length);
              let a = [];
              return (
                Y(a, n.length),
                {
                  programIdIndex: r,
                  keyIndicesCount: s.Buffer.from(i),
                  keyIndices: t,
                  dataLength: s.Buffer.from(a),
                  data: n,
                }
              );
            }),
            n = [];
          Y(n, r.length);
          let i = s.Buffer.alloc(z);
          s.Buffer.from(n).copy(i);
          let a = n.length;
          r.forEach((e) => {
            let t = g
              .n_([
                g.u8("programIdIndex"),
                g.Ik(e.keyIndicesCount.length, "keyIndicesCount"),
                g.A9(g.u8("keyIndex"), e.keyIndices.length, "keyIndices"),
                g.Ik(e.dataLength.length, "dataLength"),
                g.A9(g.u8("userdatum"), e.data.length, "data"),
              ])
              .encode(e, i, a);
            a += t;
          }),
            (i = i.slice(0, a));
          let o = g.n_([
              g.Ik(1, "numRequiredSignatures"),
              g.Ik(1, "numReadonlySignedAccounts"),
              g.Ik(1, "numReadonlyUnsignedAccounts"),
              g.Ik(t.length, "keyCount"),
              g.A9(H("key"), e, "keys"),
              H("recentBlockhash"),
            ]),
            c = {
              numRequiredSignatures: s.Buffer.from([
                this.header.numRequiredSignatures,
              ]),
              numReadonlySignedAccounts: s.Buffer.from([
                this.header.numReadonlySignedAccounts,
              ]),
              numReadonlyUnsignedAccounts: s.Buffer.from([
                this.header.numReadonlyUnsignedAccounts,
              ]),
              keyCount: s.Buffer.from(t),
              keys: this.accountKeys.map((e) => B(e.toBytes())),
              recentBlockhash: l().decode(this.recentBlockhash),
            },
            u = s.Buffer.alloc(2048),
            d = o.encode(c, u);
          return i.copy(u, d), u.slice(0, d + i.length);
        }
        static from(e) {
          let t = [...e],
            r = Q(t);
          if (r !== (r & q))
            throw Error(
              "Versioned messages must be deserialized with VersionedMessage.deserialize()"
            );
          let n = Q(t),
            i = Q(t),
            a = j(t),
            o = [];
          for (let e = 0; e < a; e++) {
            let e = ee(t, 0, L);
            o.push(new W(s.Buffer.from(e)));
          }
          let c = ee(t, 0, L),
            u = j(t),
            d = [];
          for (let e = 0; e < u; e++) {
            let e = Q(t),
              r = j(t),
              n = ee(t, 0, r),
              i = j(t),
              a = ee(t, 0, i),
              o = l().encode(s.Buffer.from(a));
            d.push({ programIdIndex: e, accounts: n, data: o });
          }
          return new et({
            header: {
              numRequiredSignatures: r,
              numReadonlySignedAccounts: n,
              numReadonlyUnsignedAccounts: i,
            },
            recentBlockhash: l().encode(s.Buffer.from(c)),
            accountKeys: o,
            instructions: d,
          });
        }
      }
      class er {
        constructor(e) {
          (this.header = void 0),
            (this.staticAccountKeys = void 0),
            (this.recentBlockhash = void 0),
            (this.compiledInstructions = void 0),
            (this.addressTableLookups = void 0),
            (this.header = e.header),
            (this.staticAccountKeys = e.staticAccountKeys),
            (this.recentBlockhash = e.recentBlockhash),
            (this.compiledInstructions = e.compiledInstructions),
            (this.addressTableLookups = e.addressTableLookups);
        }
        get version() {
          return 0;
        }
        get numAccountKeysFromLookups() {
          let e = 0;
          for (let t of this.addressTableLookups)
            e += t.readonlyIndexes.length + t.writableIndexes.length;
          return e;
        }
        getAccountKeys(e) {
          let t;
          if (e && "accountKeysFromLookups" in e && e.accountKeysFromLookups) {
            if (
              this.numAccountKeysFromLookups !=
              e.accountKeysFromLookups.writable.length +
                e.accountKeysFromLookups.readonly.length
            )
              throw Error(
                "Failed to get account keys because of a mismatch in the number of account keys from lookups"
              );
            t = e.accountKeysFromLookups;
          } else if (
            e &&
            "addressLookupTableAccounts" in e &&
            e.addressLookupTableAccounts
          )
            t = this.resolveAddressTableLookups(e.addressLookupTableAccounts);
          else if (this.addressTableLookups.length > 0)
            throw Error(
              "Failed to get account keys because address table lookups were not resolved"
            );
          return new D(this.staticAccountKeys, t);
        }
        isAccountSigner(e) {
          return e < this.header.numRequiredSignatures;
        }
        isAccountWritable(e) {
          let t = this.header.numRequiredSignatures,
            r = this.staticAccountKeys.length;
          if (e >= r)
            return (
              e - r <
              this.addressTableLookups.reduce(
                (e, t) => e + t.writableIndexes.length,
                0
              )
            );
          if (!(e >= this.header.numRequiredSignatures))
            return e < t - this.header.numReadonlySignedAccounts;
          {
            let n = r - t - this.header.numReadonlyUnsignedAccounts;
            return e - t < n;
          }
        }
        resolveAddressTableLookups(e) {
          let t = { writable: [], readonly: [] };
          for (let r of this.addressTableLookups) {
            let n = e.find((e) => e.key.equals(r.accountKey));
            if (!n)
              throw Error(
                `Failed to find address lookup table account for table key ${r.accountKey.toBase58()}`
              );
            for (let e of r.writableIndexes)
              if (e < n.state.addresses.length)
                t.writable.push(n.state.addresses[e]);
              else
                throw Error(
                  `Failed to find address for index ${e} in address lookup table ${r.accountKey.toBase58()}`
                );
            for (let e of r.readonlyIndexes)
              if (e < n.state.addresses.length)
                t.readonly.push(n.state.addresses[e]);
              else
                throw Error(
                  `Failed to find address for index ${e} in address lookup table ${r.accountKey.toBase58()}`
                );
          }
          return t;
        }
        static compile(e) {
          let t = X.compile(e.instructions, e.payerKey),
            r = [],
            n = { writable: [], readonly: [] };
          for (let i of e.addressLookupTableAccounts || []) {
            let e = t.extractTableLookup(i);
            if (void 0 !== e) {
              let [t, { writable: i, readonly: s }] = e;
              r.push(t), n.writable.push(...i), n.readonly.push(...s);
            }
          }
          let [i, s] = t.getMessageComponents(),
            a = new D(s, n).compileInstructions(e.instructions);
          return new er({
            header: i,
            staticAccountKeys: s,
            recentBlockhash: e.recentBlockhash,
            compiledInstructions: a,
            addressTableLookups: r,
          });
        }
        serialize() {
          let e = [];
          Y(e, this.staticAccountKeys.length);
          let t = this.serializeInstructions(),
            r = [];
          Y(r, this.compiledInstructions.length);
          let n = this.serializeAddressTableLookups(),
            i = [];
          Y(i, this.addressTableLookups.length);
          let s = g.n_([
              g.u8("prefix"),
              g.n_(
                [
                  g.u8("numRequiredSignatures"),
                  g.u8("numReadonlySignedAccounts"),
                  g.u8("numReadonlyUnsignedAccounts"),
                ],
                "header"
              ),
              g.Ik(e.length, "staticAccountKeysLength"),
              g.A9(H(), this.staticAccountKeys.length, "staticAccountKeys"),
              H("recentBlockhash"),
              g.Ik(r.length, "instructionsLength"),
              g.Ik(t.length, "serializedInstructions"),
              g.Ik(i.length, "addressTableLookupsLength"),
              g.Ik(n.length, "serializedAddressTableLookups"),
            ]),
            a = new Uint8Array(z),
            o = s.encode(
              {
                prefix: 128,
                header: this.header,
                staticAccountKeysLength: new Uint8Array(e),
                staticAccountKeys: this.staticAccountKeys.map((e) =>
                  e.toBytes()
                ),
                recentBlockhash: l().decode(this.recentBlockhash),
                instructionsLength: new Uint8Array(r),
                serializedInstructions: t,
                addressTableLookupsLength: new Uint8Array(i),
                serializedAddressTableLookups: n,
              },
              a
            );
          return a.slice(0, o);
        }
        serializeInstructions() {
          let e = 0,
            t = new Uint8Array(z);
          for (let r of this.compiledInstructions) {
            let n = [];
            Y(n, r.accountKeyIndexes.length);
            let i = [];
            Y(i, r.data.length);
            let s = g.n_([
              g.u8("programIdIndex"),
              g.Ik(n.length, "encodedAccountKeyIndexesLength"),
              g.A9(g.u8(), r.accountKeyIndexes.length, "accountKeyIndexes"),
              g.Ik(i.length, "encodedDataLength"),
              g.Ik(r.data.length, "data"),
            ]);
            e += s.encode(
              {
                programIdIndex: r.programIdIndex,
                encodedAccountKeyIndexesLength: new Uint8Array(n),
                accountKeyIndexes: r.accountKeyIndexes,
                encodedDataLength: new Uint8Array(i),
                data: r.data,
              },
              t,
              e
            );
          }
          return t.slice(0, e);
        }
        serializeAddressTableLookups() {
          let e = 0,
            t = new Uint8Array(z);
          for (let r of this.addressTableLookups) {
            let n = [];
            Y(n, r.writableIndexes.length);
            let i = [];
            Y(i, r.readonlyIndexes.length);
            let s = g.n_([
              H("accountKey"),
              g.Ik(n.length, "encodedWritableIndexesLength"),
              g.A9(g.u8(), r.writableIndexes.length, "writableIndexes"),
              g.Ik(i.length, "encodedReadonlyIndexesLength"),
              g.A9(g.u8(), r.readonlyIndexes.length, "readonlyIndexes"),
            ]);
            e += s.encode(
              {
                accountKey: r.accountKey.toBytes(),
                encodedWritableIndexesLength: new Uint8Array(n),
                writableIndexes: r.writableIndexes,
                encodedReadonlyIndexesLength: new Uint8Array(i),
                readonlyIndexes: r.readonlyIndexes,
              },
              t,
              e
            );
          }
          return t.slice(0, e);
        }
        static deserialize(e) {
          let t = [...e],
            r = Q(t),
            n = r & q;
          G(r !== n, "Expected versioned message but received legacy message"),
            G(
              0 === n,
              `Expected versioned message with version 0 but found version ${n}`
            );
          let i = {
              numRequiredSignatures: Q(t),
              numReadonlySignedAccounts: Q(t),
              numReadonlyUnsignedAccounts: Q(t),
            },
            s = [],
            a = j(t);
          for (let e = 0; e < a; e++) s.push(new W(ee(t, 0, L)));
          let o = l().encode(ee(t, 0, L)),
            c = j(t),
            u = [];
          for (let e = 0; e < c; e++) {
            let e = Q(t),
              r = j(t),
              n = ee(t, 0, r),
              i = j(t),
              s = new Uint8Array(ee(t, 0, i));
            u.push({ programIdIndex: e, accountKeyIndexes: n, data: s });
          }
          let d = j(t),
            h = [];
          for (let e = 0; e < d; e++) {
            let e = new W(ee(t, 0, L)),
              r = j(t),
              n = ee(t, 0, r),
              i = j(t),
              s = ee(t, 0, i);
            h.push({ accountKey: e, writableIndexes: n, readonlyIndexes: s });
          }
          return new er({
            header: i,
            staticAccountKeys: s,
            recentBlockhash: o,
            compiledInstructions: u,
            addressTableLookups: h,
          });
        }
      }
      let en = {
          deserializeMessageVersion(e) {
            let t = e[0],
              r = t & q;
            return r === t ? "legacy" : r;
          },
          deserialize: (e) => {
            let t = en.deserializeMessageVersion(e);
            if ("legacy" === t) return et.from(e);
            if (0 === t) return er.deserialize(e);
            throw Error(
              `Transaction message version ${t} deserialization is not supported`
            );
          },
        },
        ei =
          (((n = {})[(n.BLOCKHEIGHT_EXCEEDED = 0)] = "BLOCKHEIGHT_EXCEEDED"),
          (n[(n.PROCESSED = 1)] = "PROCESSED"),
          (n[(n.TIMED_OUT = 2)] = "TIMED_OUT"),
          (n[(n.NONCE_INVALID = 3)] = "NONCE_INVALID"),
          n),
        es = s.Buffer.alloc(U).fill(0);
      class ea {
        constructor(e) {
          (this.keys = void 0),
            (this.programId = void 0),
            (this.data = s.Buffer.alloc(0)),
            (this.programId = e.programId),
            (this.keys = e.keys),
            e.data && (this.data = e.data);
        }
        toJSON() {
          return {
            keys: this.keys.map(
              ({ pubkey: e, isSigner: t, isWritable: r }) => ({
                pubkey: e.toJSON(),
                isSigner: t,
                isWritable: r,
              })
            ),
            programId: this.programId.toJSON(),
            data: [...this.data],
          };
        }
      }
      class eo {
        get signature() {
          return this.signatures.length > 0
            ? this.signatures[0].signature
            : null;
        }
        constructor(e) {
          if (
            ((this.signatures = []),
            (this.feePayer = void 0),
            (this.instructions = []),
            (this.recentBlockhash = void 0),
            (this.lastValidBlockHeight = void 0),
            (this.nonceInfo = void 0),
            (this.minNonceContextSlot = void 0),
            (this._message = void 0),
            (this._json = void 0),
            !e)
          )
            return;
          if (
            (e.feePayer && (this.feePayer = e.feePayer),
            e.signatures && (this.signatures = e.signatures),
            Object.prototype.hasOwnProperty.call(e, "nonceInfo"))
          ) {
            let { minContextSlot: t, nonceInfo: r } = e;
            (this.minNonceContextSlot = t), (this.nonceInfo = r);
          } else if (
            Object.prototype.hasOwnProperty.call(e, "lastValidBlockHeight")
          ) {
            let { blockhash: t, lastValidBlockHeight: r } = e;
            (this.recentBlockhash = t), (this.lastValidBlockHeight = r);
          } else {
            let { recentBlockhash: t, nonceInfo: r } = e;
            r && (this.nonceInfo = r), (this.recentBlockhash = t);
          }
        }
        toJSON() {
          return {
            recentBlockhash: this.recentBlockhash || null,
            feePayer: this.feePayer ? this.feePayer.toJSON() : null,
            nonceInfo: this.nonceInfo
              ? {
                  nonce: this.nonceInfo.nonce,
                  nonceInstruction: this.nonceInfo.nonceInstruction.toJSON(),
                }
              : null,
            instructions: this.instructions.map((e) => e.toJSON()),
            signers: this.signatures.map(({ publicKey: e }) => e.toJSON()),
          };
        }
        add(...e) {
          if (0 === e.length) throw Error("No instructions");
          return (
            e.forEach((e) => {
              "instructions" in e
                ? (this.instructions = this.instructions.concat(e.instructions))
                : "data" in e && "programId" in e && "keys" in e
                ? this.instructions.push(e)
                : this.instructions.push(new ea(e));
            }),
            this
          );
        }
        compileMessage() {
          let e, t, r;
          if (
            this._message &&
            JSON.stringify(this.toJSON()) === JSON.stringify(this._json)
          )
            return this._message;
          if (
            (this.nonceInfo
              ? ((e = this.nonceInfo.nonce),
                (t =
                  this.instructions[0] != this.nonceInfo.nonceInstruction
                    ? [this.nonceInfo.nonceInstruction, ...this.instructions]
                    : this.instructions))
              : ((e = this.recentBlockhash), (t = this.instructions)),
            !e)
          )
            throw Error("Transaction recentBlockhash required");
          if (
            (t.length < 1 && console.warn("No instructions provided"),
            this.feePayer)
          )
            r = this.feePayer;
          else if (this.signatures.length > 0 && this.signatures[0].publicKey)
            r = this.signatures[0].publicKey;
          else throw Error("Transaction fee payer required");
          for (let e = 0; e < t.length; e++)
            if (void 0 === t[e].programId)
              throw Error(
                `Transaction instruction index ${e} has undefined program id`
              );
          let n = [],
            i = [];
          t.forEach((e) => {
            e.keys.forEach((e) => {
              i.push({ ...e });
            });
            let t = e.programId.toString();
            n.includes(t) || n.push(t);
          }),
            n.forEach((e) => {
              i.push({ pubkey: new W(e), isSigner: !1, isWritable: !1 });
            });
          let s = [];
          i.forEach((e) => {
            let t = e.pubkey.toString(),
              r = s.findIndex((e) => e.pubkey.toString() === t);
            r > -1
              ? ((s[r].isWritable = s[r].isWritable || e.isWritable),
                (s[r].isSigner = s[r].isSigner || e.isSigner))
              : s.push(e);
          }),
            s.sort(function (e, t) {
              return e.isSigner !== t.isSigner
                ? e.isSigner
                  ? -1
                  : 1
                : e.isWritable !== t.isWritable
                ? e.isWritable
                  ? -1
                  : 1
                : e.pubkey
                    .toBase58()
                    .localeCompare(t.pubkey.toBase58(), "en", {
                      localeMatcher: "best fit",
                      usage: "sort",
                      sensitivity: "variant",
                      ignorePunctuation: !1,
                      numeric: !1,
                      caseFirst: "lower",
                    });
            });
          let a = s.findIndex((e) => e.pubkey.equals(r));
          if (a > -1) {
            let [e] = s.splice(a, 1);
            (e.isSigner = !0), (e.isWritable = !0), s.unshift(e);
          } else s.unshift({ pubkey: r, isSigner: !0, isWritable: !0 });
          for (let e of this.signatures) {
            let t = s.findIndex((t) => t.pubkey.equals(e.publicKey));
            if (t > -1)
              s[t].isSigner ||
                ((s[t].isSigner = !0),
                console.warn(
                  "Transaction references a signature that is unnecessary, only the fee payer and instruction signer accounts should sign a transaction. This behavior is deprecated and will throw an error in the next major version release."
                ));
            else throw Error(`unknown signer: ${e.publicKey.toString()}`);
          }
          let o = 0,
            c = 0,
            u = 0,
            d = [],
            h = [];
          s.forEach(({ pubkey: e, isSigner: t, isWritable: r }) => {
            t
              ? (d.push(e.toString()), (o += 1), r || (c += 1))
              : (h.push(e.toString()), r || (u += 1));
          });
          let g = d.concat(h),
            p = t.map((e) => {
              let { data: t, programId: r } = e;
              return {
                programIdIndex: g.indexOf(r.toString()),
                accounts: e.keys.map((e) => g.indexOf(e.pubkey.toString())),
                data: l().encode(t),
              };
            });
          return (
            p.forEach((e) => {
              G(e.programIdIndex >= 0), e.accounts.forEach((e) => G(e >= 0));
            }),
            new et({
              header: {
                numRequiredSignatures: o,
                numReadonlySignedAccounts: c,
                numReadonlyUnsignedAccounts: u,
              },
              accountKeys: g,
              recentBlockhash: e,
              instructions: p,
            })
          );
        }
        _compile() {
          let e = this.compileMessage(),
            t = e.accountKeys.slice(0, e.header.numRequiredSignatures);
          return (
            (this.signatures.length === t.length &&
              this.signatures.every((e, r) => t[r].equals(e.publicKey))) ||
              (this.signatures = t.map((e) => ({
                signature: null,
                publicKey: e,
              }))),
            e
          );
        }
        serializeMessage() {
          return this._compile().serialize();
        }
        async getEstimatedFee(e) {
          return (await e.getFeeForMessage(this.compileMessage())).value;
        }
        setSigners(...e) {
          if (0 === e.length) throw Error("No signers");
          let t = new Set();
          this.signatures = e
            .filter((e) => {
              let r = e.toString();
              return !t.has(r) && (t.add(r), !0);
            })
            .map((e) => ({ signature: null, publicKey: e }));
        }
        sign(...e) {
          if (0 === e.length) throw Error("No signers");
          let t = new Set(),
            r = [];
          for (let n of e) {
            let e = n.publicKey.toString();
            t.has(e) || (t.add(e), r.push(n));
          }
          this.signatures = r.map((e) => ({
            signature: null,
            publicKey: e.publicKey,
          }));
          let n = this._compile();
          this._partialSign(n, ...r);
        }
        partialSign(...e) {
          if (0 === e.length) throw Error("No signers");
          let t = new Set(),
            r = [];
          for (let n of e) {
            let e = n.publicKey.toString();
            t.has(e) || (t.add(e), r.push(n));
          }
          let n = this._compile();
          this._partialSign(n, ...r);
        }
        _partialSign(e, ...t) {
          let r = e.serialize();
          t.forEach((e) => {
            let t = v(r, e.secretKey);
            this._addSignature(e.publicKey, B(t));
          });
        }
        addSignature(e, t) {
          this._compile(), this._addSignature(e, t);
        }
        _addSignature(e, t) {
          G(64 === t.length);
          let r = this.signatures.findIndex((t) => e.equals(t.publicKey));
          if (r < 0) throw Error(`unknown signer: ${e.toString()}`);
          this.signatures[r].signature = s.Buffer.from(t);
        }
        verifySignatures(e = !0) {
          return !this._getMessageSignednessErrors(this.serializeMessage(), e);
        }
        _getMessageSignednessErrors(e, t) {
          let r = {};
          for (let { signature: n, publicKey: i } of this.signatures)
            null === n
              ? t && (r.missing ||= []).push(i)
              : E(n, e, i.toBytes()) || (r.invalid ||= []).push(i);
          return r.invalid || r.missing ? r : void 0;
        }
        serialize(e) {
          let { requireAllSignatures: t, verifySignatures: r } = Object.assign(
              { requireAllSignatures: !0, verifySignatures: !0 },
              e
            ),
            n = this.serializeMessage();
          if (r) {
            let e = this._getMessageSignednessErrors(n, t);
            if (e) {
              let t = "Signature verification failed.";
              throw (
                (e.invalid &&
                  (t += `
Invalid signature for public key${
                    1 === e.invalid.length ? "" : "(s)"
                  } [\`${e.invalid.map((e) => e.toBase58()).join("`, `")}\`].`),
                e.missing &&
                  (t += `
Missing signature for public key${
                    1 === e.missing.length ? "" : "(s)"
                  } [\`${e.missing.map((e) => e.toBase58()).join("`, `")}\`].`),
                Error(t))
              );
            }
          }
          return this._serialize(n);
        }
        _serialize(e) {
          let { signatures: t } = this,
            r = [];
          Y(r, t.length);
          let n = r.length + 64 * t.length + e.length,
            i = s.Buffer.alloc(n);
          return (
            G(t.length < 256),
            s.Buffer.from(r).copy(i, 0),
            t.forEach(({ signature: e }, t) => {
              null !== e &&
                (G(64 === e.length, "signature has invalid length"),
                s.Buffer.from(e).copy(i, r.length + 64 * t));
            }),
            e.copy(i, r.length + 64 * t.length),
            G(i.length <= z, `Transaction too large: ${i.length} > ${z}`),
            i
          );
        }
        get keys() {
          return (
            G(1 === this.instructions.length),
            this.instructions[0].keys.map((e) => e.pubkey)
          );
        }
        get programId() {
          return (
            G(1 === this.instructions.length), this.instructions[0].programId
          );
        }
        get data() {
          return G(1 === this.instructions.length), this.instructions[0].data;
        }
        static from(e) {
          let t = [...e],
            r = j(t),
            n = [];
          for (let e = 0; e < r; e++) {
            let e = ee(t, 0, U);
            n.push(l().encode(s.Buffer.from(e)));
          }
          return eo.populate(et.from(t), n);
        }
        static populate(e, t = []) {
          let r = new eo();
          return (
            (r.recentBlockhash = e.recentBlockhash),
            e.header.numRequiredSignatures > 0 &&
              (r.feePayer = e.accountKeys[0]),
            t.forEach((t, n) => {
              let i = {
                signature: t == l().encode(es) ? null : l().decode(t),
                publicKey: e.accountKeys[n],
              };
              r.signatures.push(i);
            }),
            e.instructions.forEach((t) => {
              let n = t.accounts.map((t) => {
                let n = e.accountKeys[t];
                return {
                  pubkey: n,
                  isSigner:
                    r.signatures.some(
                      (e) => e.publicKey.toString() === n.toString()
                    ) || e.isAccountSigner(t),
                  isWritable: e.isAccountWritable(t),
                };
              });
              r.instructions.push(
                new ea({
                  keys: n,
                  programId: e.accountKeys[t.programIdIndex],
                  data: l().decode(t.data),
                })
              );
            }),
            (r._message = e),
            (r._json = r.toJSON()),
            r
          );
        }
      }
      class ec {
        constructor(e) {
          (this.payerKey = void 0),
            (this.instructions = void 0),
            (this.recentBlockhash = void 0),
            (this.payerKey = e.payerKey),
            (this.instructions = e.instructions),
            (this.recentBlockhash = e.recentBlockhash);
        }
        static decompile(e, t) {
          let { header: r, compiledInstructions: n, recentBlockhash: i } = e,
            {
              numRequiredSignatures: s,
              numReadonlySignedAccounts: a,
              numReadonlyUnsignedAccounts: o,
            } = r,
            c = s - a;
          G(c > 0, "Message header is invalid");
          let u = e.staticAccountKeys.length - s - o;
          G(u >= 0, "Message header is invalid");
          let l = e.getAccountKeys(t),
            d = l.get(0);
          if (void 0 === d)
            throw Error(
              "Failed to decompile message because no account keys were found"
            );
          let h = [];
          for (let e of n) {
            let t = [];
            for (let n of e.accountKeyIndexes) {
              let e;
              let i = l.get(n);
              if (void 0 === i)
                throw Error(`Failed to find key for account key index ${n}`);
              (e =
                n < s
                  ? n < c
                  : n < l.staticAccountKeys.length
                  ? n - s < u
                  : n - l.staticAccountKeys.length <
                    l.accountKeysFromLookups.writable.length),
                t.push({
                  pubkey: i,
                  isSigner: n < r.numRequiredSignatures,
                  isWritable: e,
                });
            }
            let n = l.get(e.programIdIndex);
            if (void 0 === n)
              throw Error(
                `Failed to find program id for program id index ${e.programIdIndex}`
              );
            h.push(new ea({ programId: n, data: B(e.data), keys: t }));
          }
          return new ec({ payerKey: d, instructions: h, recentBlockhash: i });
        }
        compileToLegacyMessage() {
          return et.compile({
            payerKey: this.payerKey,
            recentBlockhash: this.recentBlockhash,
            instructions: this.instructions,
          });
        }
        compileToV0Message(e) {
          return er.compile({
            payerKey: this.payerKey,
            recentBlockhash: this.recentBlockhash,
            instructions: this.instructions,
            addressLookupTableAccounts: e,
          });
        }
      }
      class eu {
        get version() {
          return this.message.version;
        }
        constructor(e, t) {
          if (
            ((this.signatures = void 0), (this.message = void 0), void 0 !== t)
          )
            G(
              t.length === e.header.numRequiredSignatures,
              "Expected signatures length to be equal to the number of required signatures"
            ),
              (this.signatures = t);
          else {
            let t = [];
            for (let r = 0; r < e.header.numRequiredSignatures; r++)
              t.push(new Uint8Array(U));
            this.signatures = t;
          }
          this.message = e;
        }
        serialize() {
          let e = this.message.serialize(),
            t = [];
          Y(t, this.signatures.length);
          let r = g.n_([
              g.Ik(t.length, "encodedSignaturesLength"),
              g.A9($(), this.signatures.length, "signatures"),
              g.Ik(e.length, "serializedMessage"),
            ]),
            n = new Uint8Array(2048),
            i = r.encode(
              {
                encodedSignaturesLength: new Uint8Array(t),
                signatures: this.signatures,
                serializedMessage: e,
              },
              n
            );
          return n.slice(0, i);
        }
        static deserialize(e) {
          let t = [...e],
            r = [],
            n = j(t);
          for (let e = 0; e < n; e++) r.push(new Uint8Array(ee(t, 0, U)));
          return new eu(en.deserialize(new Uint8Array(t)), r);
        }
        sign(e) {
          let t = this.message.serialize(),
            r = this.message.staticAccountKeys.slice(
              0,
              this.message.header.numRequiredSignatures
            );
          for (let n of e) {
            let e = r.findIndex((e) => e.equals(n.publicKey));
            G(
              e >= 0,
              `Cannot sign with non signer key ${n.publicKey.toBase58()}`
            ),
              (this.signatures[e] = v(t, n.secretKey));
          }
        }
        addSignature(e, t) {
          G(64 === t.byteLength, "Signature must be 64 bytes long");
          let r = this.message.staticAccountKeys
            .slice(0, this.message.header.numRequiredSignatures)
            .findIndex((t) => t.equals(e));
          G(
            r >= 0,
            `Can not add signature; \`${e.toBase58()}\` is not required to sign this transaction`
          ),
            (this.signatures[r] = t);
        }
      }
      let el = new W("SysvarC1ock11111111111111111111111111111111"),
        ed = new W("SysvarEpochSchedu1e111111111111111111111111"),
        eh = new W("Sysvar1nstructions1111111111111111111111111"),
        eg = new W("SysvarRecentB1ockHashes11111111111111111111"),
        ep = new W("SysvarRent111111111111111111111111111111111"),
        ey = new W("SysvarRewards111111111111111111111111111111"),
        eb = new W("SysvarS1otHashes111111111111111111111111111"),
        em = new W("SysvarS1otHistory11111111111111111111111111"),
        ef = new W("SysvarStakeHistory1111111111111111111111111");
      class ek extends Error {
        constructor({
          action: e,
          signature: t,
          transactionMessage: r,
          logs: n,
        }) {
          let i;
          let s = n
              ? `Logs: 
${JSON.stringify(n.slice(-10), null, 2)}. `
              : "",
            a =
              "\nCatch the `SendTransactionError` and call `getLogs()` on it for full details.";
          switch (e) {
            case "send":
              i =
                `Transaction ${t} resulted in an error. 
${r}. ` +
                s +
                a;
              break;
            case "simulate":
              i =
                `Simulation failed. 
Message: ${r}. 
` +
                s +
                a;
              break;
            default:
              i = `Unknown action '${e}'`;
          }
          super(i),
            (this.signature = void 0),
            (this.transactionMessage = void 0),
            (this.transactionLogs = void 0),
            (this.signature = t),
            (this.transactionMessage = r),
            (this.transactionLogs = n || void 0);
        }
        get transactionError() {
          return {
            message: this.transactionMessage,
            logs: Array.isArray(this.transactionLogs)
              ? this.transactionLogs
              : void 0,
          };
        }
        get logs() {
          let e = this.transactionLogs;
          if (null == e || "object" != typeof e || !("then" in e)) return e;
        }
        async getLogs(e) {
          return (
            Array.isArray(this.transactionLogs) ||
              (this.transactionLogs = new Promise((t, r) => {
                e.getTransaction(this.signature)
                  .then((e) => {
                    if (e && e.meta && e.meta.logMessages) {
                      let r = e.meta.logMessages;
                      (this.transactionLogs = r), t(r);
                    } else r(Error("Log messages not found"));
                  })
                  .catch(r);
              })),
            await this.transactionLogs
          );
        }
      }
      let ew = {
        JSON_RPC_SERVER_ERROR_BLOCK_CLEANED_UP: -32001,
        JSON_RPC_SERVER_ERROR_SEND_TRANSACTION_PREFLIGHT_FAILURE: -32002,
        JSON_RPC_SERVER_ERROR_TRANSACTION_SIGNATURE_VERIFICATION_FAILURE:
          -32003,
        JSON_RPC_SERVER_ERROR_BLOCK_NOT_AVAILABLE: -32004,
        JSON_RPC_SERVER_ERROR_NODE_UNHEALTHY: -32005,
        JSON_RPC_SERVER_ERROR_TRANSACTION_PRECOMPILE_VERIFICATION_FAILURE:
          -32006,
        JSON_RPC_SERVER_ERROR_SLOT_SKIPPED: -32007,
        JSON_RPC_SERVER_ERROR_NO_SNAPSHOT: -32008,
        JSON_RPC_SERVER_ERROR_LONG_TERM_STORAGE_SLOT_SKIPPED: -32009,
        JSON_RPC_SERVER_ERROR_KEY_EXCLUDED_FROM_SECONDARY_INDEX: -32010,
        JSON_RPC_SERVER_ERROR_TRANSACTION_HISTORY_NOT_AVAILABLE: -32011,
        JSON_RPC_SCAN_ERROR: -32012,
        JSON_RPC_SERVER_ERROR_TRANSACTION_SIGNATURE_LEN_MISMATCH: -32013,
        JSON_RPC_SERVER_ERROR_BLOCK_STATUS_NOT_AVAILABLE_YET: -32014,
        JSON_RPC_SERVER_ERROR_UNSUPPORTED_TRANSACTION_VERSION: -32015,
        JSON_RPC_SERVER_ERROR_MIN_CONTEXT_SLOT_NOT_REACHED: -32016,
      };
      class eS extends Error {
        constructor({ code: e, message: t, data: r }, n) {
          super(null != n ? `${n}: ${t}` : t),
            (this.code = void 0),
            (this.data = void 0),
            (this.code = e),
            (this.data = r),
            (this.name = "SolanaJSONRPCError");
        }
      }
      async function eI(e, t, r, n) {
        let i;
        let s = n && {
            skipPreflight: n.skipPreflight,
            preflightCommitment: n.preflightCommitment || n.commitment,
            maxRetries: n.maxRetries,
            minContextSlot: n.minContextSlot,
          },
          a = await e.sendTransaction(t, r, s);
        if (null != t.recentBlockhash && null != t.lastValidBlockHeight)
          i = (
            await e.confirmTransaction(
              {
                abortSignal: n?.abortSignal,
                signature: a,
                blockhash: t.recentBlockhash,
                lastValidBlockHeight: t.lastValidBlockHeight,
              },
              n && n.commitment
            )
          ).value;
        else if (null != t.minNonceContextSlot && null != t.nonceInfo) {
          let { nonceInstruction: r } = t.nonceInfo,
            s = r.keys[0].pubkey;
          i = (
            await e.confirmTransaction(
              {
                abortSignal: n?.abortSignal,
                minContextSlot: t.minNonceContextSlot,
                nonceAccountPubkey: s,
                nonceValue: t.nonceInfo.nonce,
                signature: a,
              },
              n && n.commitment
            )
          ).value;
        } else
          n?.abortSignal != null &&
            console.warn(
              "sendAndConfirmTransaction(): A transaction with a deprecated confirmation strategy was supplied along with an `abortSignal`. Only transactions having `lastValidBlockHeight` or a combination of `nonceInfo` and `minNonceContextSlot` are abortable."
            ),
            (i = (await e.confirmTransaction(a, n && n.commitment)).value);
        if (i.err) {
          if (null != a)
            throw new ek({
              action: "send",
              signature: a,
              transactionMessage: `Status: (${JSON.stringify(i)})`,
            });
          throw Error(`Transaction ${a} failed (${JSON.stringify(i)})`);
        }
        return a;
      }
      function e_(e) {
        return new Promise((t) => setTimeout(t, e));
      }
      function eA(e, t) {
        let r =
            e.layout.span >= 0
              ? e.layout.span
              : (function e(t, r) {
                  let n = (t) => {
                      if (t.span >= 0) return t.span;
                      if ("function" == typeof t.alloc)
                        return t.alloc(r[t.property]);
                      if ("count" in t && "elementLayout" in t) {
                        let e = r[t.property];
                        if (Array.isArray(e))
                          return e.length * n(t.elementLayout);
                      } else if ("fields" in t)
                        return e({ layout: t }, r[t.property]);
                      return 0;
                    },
                    i = 0;
                  return (
                    t.layout.fields.forEach((e) => {
                      i += n(e);
                    }),
                    i
                  );
                })(e, t),
          n = s.Buffer.alloc(r),
          i = Object.assign({ instruction: e.index }, t);
        return e.layout.encode(i, n), n;
      }
      function eP(e, t) {
        let r;
        try {
          r = e.layout.decode(t);
        } catch (e) {
          throw Error("invalid instruction; " + e);
        }
        if (r.instruction !== e.index)
          throw Error(
            `invalid instruction; instruction index mismatch ${r.instruction} != ${e.index}`
          );
        return r;
      }
      let ev = g._O("lamportsPerSignature"),
        eE = g.n_([
          g.Jq("version"),
          g.Jq("state"),
          H("authorizedPubkey"),
          H("nonce"),
          g.n_([ev], "feeCalculator"),
        ]),
        eB = eE.span;
      class eT {
        constructor(e) {
          (this.authorizedPubkey = void 0),
            (this.nonce = void 0),
            (this.feeCalculator = void 0),
            (this.authorizedPubkey = e.authorizedPubkey),
            (this.nonce = e.nonce),
            (this.feeCalculator = e.feeCalculator);
        }
        static fromAccountData(e) {
          let t = eE.decode(B(e), 0);
          return new eT({
            authorizedPubkey: new W(t.authorizedPubkey),
            nonce: new W(t.nonce).toString(),
            feeCalculator: t.feeCalculator,
          });
        }
      }
      let eR = (e) => ({ decode: e.decode.bind(e), encode: e.encode.bind(e) }),
        eC = (e) => {
          let t = (0, g.Ik)(8, e),
            { encode: r, decode: n } = eR(t);
          return (
            (t.decode = (e, t) => {
              let r = n(e, t);
              return (0, p.oU)(s.Buffer.from(r));
            }),
            (t.encode = (e, t, n) => r((0, p.k$)(e, 8), t, n)),
            t
          );
        };
      class ex {
        constructor() {}
        static decodeInstructionType(e) {
          let t;
          this.checkProgramId(e.programId);
          let r = g.Jq("instruction").decode(e.data);
          for (let [e, n] of Object.entries(eL))
            if (n.index == r) {
              t = e;
              break;
            }
          if (!t)
            throw Error("Instruction type incorrect; not a SystemInstruction");
          return t;
        }
        static decodeCreateAccount(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
          let { lamports: t, space: r, programId: n } = eP(eL.Create, e.data);
          return {
            fromPubkey: e.keys[0].pubkey,
            newAccountPubkey: e.keys[1].pubkey,
            lamports: t,
            space: r,
            programId: new W(n),
          };
        }
        static decodeTransfer(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
          let { lamports: t } = eP(eL.Transfer, e.data);
          return {
            fromPubkey: e.keys[0].pubkey,
            toPubkey: e.keys[1].pubkey,
            lamports: t,
          };
        }
        static decodeTransferWithSeed(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
          let {
            lamports: t,
            seed: r,
            programId: n,
          } = eP(eL.TransferWithSeed, e.data);
          return {
            fromPubkey: e.keys[0].pubkey,
            basePubkey: e.keys[1].pubkey,
            toPubkey: e.keys[2].pubkey,
            lamports: t,
            seed: r,
            programId: new W(n),
          };
        }
        static decodeAllocate(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 1);
          let { space: t } = eP(eL.Allocate, e.data);
          return { accountPubkey: e.keys[0].pubkey, space: t };
        }
        static decodeAllocateWithSeed(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 1);
          let {
            base: t,
            seed: r,
            space: n,
            programId: i,
          } = eP(eL.AllocateWithSeed, e.data);
          return {
            accountPubkey: e.keys[0].pubkey,
            basePubkey: new W(t),
            seed: r,
            space: n,
            programId: new W(i),
          };
        }
        static decodeAssign(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 1);
          let { programId: t } = eP(eL.Assign, e.data);
          return { accountPubkey: e.keys[0].pubkey, programId: new W(t) };
        }
        static decodeAssignWithSeed(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 1);
          let {
            base: t,
            seed: r,
            programId: n,
          } = eP(eL.AssignWithSeed, e.data);
          return {
            accountPubkey: e.keys[0].pubkey,
            basePubkey: new W(t),
            seed: r,
            programId: new W(n),
          };
        }
        static decodeCreateWithSeed(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
          let {
            base: t,
            seed: r,
            lamports: n,
            space: i,
            programId: s,
          } = eP(eL.CreateWithSeed, e.data);
          return {
            fromPubkey: e.keys[0].pubkey,
            newAccountPubkey: e.keys[1].pubkey,
            basePubkey: new W(t),
            seed: r,
            lamports: n,
            space: i,
            programId: new W(s),
          };
        }
        static decodeNonceInitialize(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
          let { authorized: t } = eP(eL.InitializeNonceAccount, e.data);
          return { noncePubkey: e.keys[0].pubkey, authorizedPubkey: new W(t) };
        }
        static decodeNonceAdvance(e) {
          return (
            this.checkProgramId(e.programId),
            this.checkKeyLength(e.keys, 3),
            eP(eL.AdvanceNonceAccount, e.data),
            {
              noncePubkey: e.keys[0].pubkey,
              authorizedPubkey: e.keys[2].pubkey,
            }
          );
        }
        static decodeNonceWithdraw(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 5);
          let { lamports: t } = eP(eL.WithdrawNonceAccount, e.data);
          return {
            noncePubkey: e.keys[0].pubkey,
            toPubkey: e.keys[1].pubkey,
            authorizedPubkey: e.keys[4].pubkey,
            lamports: t,
          };
        }
        static decodeNonceAuthorize(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
          let { authorized: t } = eP(eL.AuthorizeNonceAccount, e.data);
          return {
            noncePubkey: e.keys[0].pubkey,
            authorizedPubkey: e.keys[1].pubkey,
            newAuthorizedPubkey: new W(t),
          };
        }
        static checkProgramId(e) {
          if (!e.equals(eO.programId))
            throw Error("invalid instruction; programId is not SystemProgram");
        }
        static checkKeyLength(e, t) {
          if (e.length < t)
            throw Error(
              `invalid instruction; found ${e.length} keys, expected at least ${t}`
            );
        }
      }
      let eL = Object.freeze({
        Create: {
          index: 0,
          layout: g.n_([
            g.Jq("instruction"),
            g.gM("lamports"),
            g.gM("space"),
            H("programId"),
          ]),
        },
        Assign: {
          index: 1,
          layout: g.n_([g.Jq("instruction"), H("programId")]),
        },
        Transfer: {
          index: 2,
          layout: g.n_([g.Jq("instruction"), eC("lamports")]),
        },
        CreateWithSeed: {
          index: 3,
          layout: g.n_([
            g.Jq("instruction"),
            H("base"),
            F("seed"),
            g.gM("lamports"),
            g.gM("space"),
            H("programId"),
          ]),
        },
        AdvanceNonceAccount: { index: 4, layout: g.n_([g.Jq("instruction")]) },
        WithdrawNonceAccount: {
          index: 5,
          layout: g.n_([g.Jq("instruction"), g.gM("lamports")]),
        },
        InitializeNonceAccount: {
          index: 6,
          layout: g.n_([g.Jq("instruction"), H("authorized")]),
        },
        AuthorizeNonceAccount: {
          index: 7,
          layout: g.n_([g.Jq("instruction"), H("authorized")]),
        },
        Allocate: {
          index: 8,
          layout: g.n_([g.Jq("instruction"), g.gM("space")]),
        },
        AllocateWithSeed: {
          index: 9,
          layout: g.n_([
            g.Jq("instruction"),
            H("base"),
            F("seed"),
            g.gM("space"),
            H("programId"),
          ]),
        },
        AssignWithSeed: {
          index: 10,
          layout: g.n_([
            g.Jq("instruction"),
            H("base"),
            F("seed"),
            H("programId"),
          ]),
        },
        TransferWithSeed: {
          index: 11,
          layout: g.n_([
            g.Jq("instruction"),
            eC("lamports"),
            F("seed"),
            H("programId"),
          ]),
        },
        UpgradeNonceAccount: { index: 12, layout: g.n_([g.Jq("instruction")]) },
      });
      class eO {
        constructor() {}
        static createAccount(e) {
          let t = eA(eL.Create, {
            lamports: e.lamports,
            space: e.space,
            programId: B(e.programId.toBuffer()),
          });
          return new ea({
            keys: [
              { pubkey: e.fromPubkey, isSigner: !0, isWritable: !0 },
              { pubkey: e.newAccountPubkey, isSigner: !0, isWritable: !0 },
            ],
            programId: this.programId,
            data: t,
          });
        }
        static transfer(e) {
          let t, r;
          return (
            "basePubkey" in e
              ? ((t = eA(eL.TransferWithSeed, {
                  lamports: BigInt(e.lamports),
                  seed: e.seed,
                  programId: B(e.programId.toBuffer()),
                })),
                (r = [
                  { pubkey: e.fromPubkey, isSigner: !1, isWritable: !0 },
                  { pubkey: e.basePubkey, isSigner: !0, isWritable: !1 },
                  { pubkey: e.toPubkey, isSigner: !1, isWritable: !0 },
                ]))
              : ((t = eA(eL.Transfer, { lamports: BigInt(e.lamports) })),
                (r = [
                  { pubkey: e.fromPubkey, isSigner: !0, isWritable: !0 },
                  { pubkey: e.toPubkey, isSigner: !1, isWritable: !0 },
                ])),
            new ea({ keys: r, programId: this.programId, data: t })
          );
        }
        static assign(e) {
          let t, r;
          return (
            "basePubkey" in e
              ? ((t = eA(eL.AssignWithSeed, {
                  base: B(e.basePubkey.toBuffer()),
                  seed: e.seed,
                  programId: B(e.programId.toBuffer()),
                })),
                (r = [
                  { pubkey: e.accountPubkey, isSigner: !1, isWritable: !0 },
                  { pubkey: e.basePubkey, isSigner: !0, isWritable: !1 },
                ]))
              : ((t = eA(eL.Assign, { programId: B(e.programId.toBuffer()) })),
                (r = [
                  { pubkey: e.accountPubkey, isSigner: !0, isWritable: !0 },
                ])),
            new ea({ keys: r, programId: this.programId, data: t })
          );
        }
        static createAccountWithSeed(e) {
          let t = eA(eL.CreateWithSeed, {
              base: B(e.basePubkey.toBuffer()),
              seed: e.seed,
              lamports: e.lamports,
              space: e.space,
              programId: B(e.programId.toBuffer()),
            }),
            r = [
              { pubkey: e.fromPubkey, isSigner: !0, isWritable: !0 },
              { pubkey: e.newAccountPubkey, isSigner: !1, isWritable: !0 },
            ];
          return (
            e.basePubkey != e.fromPubkey &&
              r.push({ pubkey: e.basePubkey, isSigner: !0, isWritable: !1 }),
            new ea({ keys: r, programId: this.programId, data: t })
          );
        }
        static createNonceAccount(e) {
          let t = new eo();
          "basePubkey" in e && "seed" in e
            ? t.add(
                eO.createAccountWithSeed({
                  fromPubkey: e.fromPubkey,
                  newAccountPubkey: e.noncePubkey,
                  basePubkey: e.basePubkey,
                  seed: e.seed,
                  lamports: e.lamports,
                  space: eB,
                  programId: this.programId,
                })
              )
            : t.add(
                eO.createAccount({
                  fromPubkey: e.fromPubkey,
                  newAccountPubkey: e.noncePubkey,
                  lamports: e.lamports,
                  space: eB,
                  programId: this.programId,
                })
              );
          let r = {
            noncePubkey: e.noncePubkey,
            authorizedPubkey: e.authorizedPubkey,
          };
          return t.add(this.nonceInitialize(r)), t;
        }
        static nonceInitialize(e) {
          let t = eA(eL.InitializeNonceAccount, {
            authorized: B(e.authorizedPubkey.toBuffer()),
          });
          return new ea({
            keys: [
              { pubkey: e.noncePubkey, isSigner: !1, isWritable: !0 },
              { pubkey: eg, isSigner: !1, isWritable: !1 },
              { pubkey: ep, isSigner: !1, isWritable: !1 },
            ],
            programId: this.programId,
            data: t,
          });
        }
        static nonceAdvance(e) {
          let t = eA(eL.AdvanceNonceAccount);
          return new ea({
            keys: [
              { pubkey: e.noncePubkey, isSigner: !1, isWritable: !0 },
              { pubkey: eg, isSigner: !1, isWritable: !1 },
              { pubkey: e.authorizedPubkey, isSigner: !0, isWritable: !1 },
            ],
            programId: this.programId,
            data: t,
          });
        }
        static nonceWithdraw(e) {
          let t = eA(eL.WithdrawNonceAccount, { lamports: e.lamports });
          return new ea({
            keys: [
              { pubkey: e.noncePubkey, isSigner: !1, isWritable: !0 },
              { pubkey: e.toPubkey, isSigner: !1, isWritable: !0 },
              { pubkey: eg, isSigner: !1, isWritable: !1 },
              { pubkey: ep, isSigner: !1, isWritable: !1 },
              { pubkey: e.authorizedPubkey, isSigner: !0, isWritable: !1 },
            ],
            programId: this.programId,
            data: t,
          });
        }
        static nonceAuthorize(e) {
          let t = eA(eL.AuthorizeNonceAccount, {
            authorized: B(e.newAuthorizedPubkey.toBuffer()),
          });
          return new ea({
            keys: [
              { pubkey: e.noncePubkey, isSigner: !1, isWritable: !0 },
              { pubkey: e.authorizedPubkey, isSigner: !0, isWritable: !1 },
            ],
            programId: this.programId,
            data: t,
          });
        }
        static allocate(e) {
          let t, r;
          return (
            "basePubkey" in e
              ? ((t = eA(eL.AllocateWithSeed, {
                  base: B(e.basePubkey.toBuffer()),
                  seed: e.seed,
                  space: e.space,
                  programId: B(e.programId.toBuffer()),
                })),
                (r = [
                  { pubkey: e.accountPubkey, isSigner: !1, isWritable: !0 },
                  { pubkey: e.basePubkey, isSigner: !0, isWritable: !1 },
                ]))
              : ((t = eA(eL.Allocate, { space: e.space })),
                (r = [
                  { pubkey: e.accountPubkey, isSigner: !0, isWritable: !0 },
                ])),
            new ea({ keys: r, programId: this.programId, data: t })
          );
        }
      }
      eO.programId = new W("11111111111111111111111111111111");
      let eW = z - 300;
      class eK {
        constructor() {}
        static getMinNumSignatures(e) {
          return 2 * (Math.ceil(e / eK.chunkSize) + 1 + 1);
        }
        static async load(e, t, r, n, i) {
          {
            let s = await e.getMinimumBalanceForRentExemption(i.length),
              a = await e.getAccountInfo(r.publicKey, "confirmed"),
              o = null;
            if (null !== a) {
              if (a.executable)
                return (
                  console.error(
                    "Program load failed, account is already executable"
                  ),
                  !1
                );
              a.data.length !== i.length &&
                (o = o || new eo()).add(
                  eO.allocate({ accountPubkey: r.publicKey, space: i.length })
                ),
                a.owner.equals(n) ||
                  (o = o || new eo()).add(
                    eO.assign({ accountPubkey: r.publicKey, programId: n })
                  ),
                a.lamports < s &&
                  (o = o || new eo()).add(
                    eO.transfer({
                      fromPubkey: t.publicKey,
                      toPubkey: r.publicKey,
                      lamports: s - a.lamports,
                    })
                  );
            } else
              o = new eo().add(
                eO.createAccount({
                  fromPubkey: t.publicKey,
                  newAccountPubkey: r.publicKey,
                  lamports: s > 0 ? s : 1,
                  space: i.length,
                  programId: n,
                })
              );
            null !== o && (await eI(e, o, [t, r], { commitment: "confirmed" }));
          }
          let a = g.n_([
              g.Jq("instruction"),
              g.Jq("offset"),
              g.Jq("bytesLength"),
              g.Jq("bytesLengthPadding"),
              g.A9(g.u8("byte"), g.cv(g.Jq(), -8), "bytes"),
            ]),
            o = eK.chunkSize,
            c = 0,
            u = i,
            l = [];
          for (; u.length > 0; ) {
            let i = u.slice(0, o),
              d = s.Buffer.alloc(o + 16);
            a.encode(
              {
                instruction: 0,
                offset: c,
                bytes: i,
                bytesLength: 0,
                bytesLengthPadding: 0,
              },
              d
            );
            let h = new eo().add({
              keys: [{ pubkey: r.publicKey, isSigner: !0, isWritable: !0 }],
              programId: n,
              data: d,
            });
            l.push(eI(e, h, [t, r], { commitment: "confirmed" })),
              e._rpcEndpoint.includes("solana.com") && (await e_(250)),
              (c += o),
              (u = u.slice(o));
          }
          await Promise.all(l);
          {
            let i = g.n_([g.Jq("instruction")]),
              a = s.Buffer.alloc(i.span);
            i.encode({ instruction: 1 }, a);
            let o = new eo().add({
                keys: [
                  { pubkey: r.publicKey, isSigner: !0, isWritable: !0 },
                  { pubkey: ep, isSigner: !1, isWritable: !1 },
                ],
                programId: n,
                data: a,
              }),
              c = "processed",
              u = await e.sendTransaction(o, [t, r], {
                preflightCommitment: c,
              }),
              { context: l, value: d } = await e.confirmTransaction(
                {
                  signature: u,
                  lastValidBlockHeight: o.lastValidBlockHeight,
                  blockhash: o.recentBlockhash,
                },
                c
              );
            if (d.err)
              throw Error(`Transaction ${u} failed (${JSON.stringify(d)})`);
            for (;;) {
              try {
                if ((await e.getSlot({ commitment: c })) > l.slot) break;
              } catch {}
              await new Promise((e) => setTimeout(e, Math.round(200)));
            }
          }
          return !0;
        }
      }
      eK.chunkSize = eW;
      let eN = new W("BPFLoader2111111111111111111111111111111111");
      class ez {
        static getMinNumSignatures(e) {
          return eK.getMinNumSignatures(e);
        }
        static load(e, t, r, n, i) {
          return eK.load(e, t, r, i, n);
        }
      }
      var eq = Object.prototype.toString,
        eU =
          Object.keys ||
          function (e) {
            var t = [];
            for (var r in e) t.push(r);
            return t;
          },
        eM =
          (i = function (e) {
            var t = (function e(t, r) {
              var n, i, s, a, o, c, u;
              if (!0 === t) return "true";
              if (!1 === t) return "false";
              switch (typeof t) {
                case "object":
                  if (null === t) return null;
                  if (t.toJSON && "function" == typeof t.toJSON)
                    return e(t.toJSON(), r);
                  if ("[object Array]" === (u = eq.call(t))) {
                    for (n = 0, s = "[", i = t.length - 1; n < i; n++)
                      s += e(t[n], !0) + ",";
                    return i > -1 && (s += e(t[n], !0)), s + "]";
                  }
                  if ("[object Object]" !== u) return JSON.stringify(t);
                  for (i = (a = eU(t).sort()).length, s = "", n = 0; n < i; )
                    void 0 !== (c = e(t[(o = a[n])], !1)) &&
                      (s && (s += ","), (s += JSON.stringify(o) + ":" + c)),
                      n++;
                  return "{" + s + "}";
                case "function":
                case "undefined":
                  return r ? null : void 0;
                case "string":
                  return JSON.stringify(t);
                default:
                  return isFinite(t) ? t : null;
              }
            })(e, !1);
            if (void 0 !== t) return "" + t;
          }).__esModule && Object.prototype.hasOwnProperty.call(i, "default")
            ? i.default
            : i;
      function eJ(e) {
        let t = 0;
        for (; e > 1; ) (e /= 2), t++;
        return t;
      }
      class eV {
        constructor(e, t, r, n, i) {
          (this.slotsPerEpoch = void 0),
            (this.leaderScheduleSlotOffset = void 0),
            (this.warmup = void 0),
            (this.firstNormalEpoch = void 0),
            (this.firstNormalSlot = void 0),
            (this.slotsPerEpoch = e),
            (this.leaderScheduleSlotOffset = t),
            (this.warmup = r),
            (this.firstNormalEpoch = n),
            (this.firstNormalSlot = i);
        }
        getEpoch(e) {
          return this.getEpochAndSlotIndex(e)[0];
        }
        getEpochAndSlotIndex(e) {
          if (e < this.firstNormalSlot) {
            var t;
            let r =
                eJ(
                  0 === (t = e + 32 + 1)
                    ? 1
                    : (t--,
                      (t |= t >> 1),
                      (t |= t >> 2),
                      (t |= t >> 4),
                      (t |= t >> 8),
                      (t |= t >> 16),
                      (t |= t >> 32) + 1)
                ) -
                eJ(32) -
                1,
              n = this.getSlotsInEpoch(r);
            return [r, e - (n - 32)];
          }
          {
            let t = e - this.firstNormalSlot,
              r = Math.floor(t / this.slotsPerEpoch);
            return [this.firstNormalEpoch + r, t % this.slotsPerEpoch];
          }
        }
        getFirstSlotInEpoch(e) {
          return e <= this.firstNormalEpoch
            ? (Math.pow(2, e) - 1) * 32
            : (e - this.firstNormalEpoch) * this.slotsPerEpoch +
                this.firstNormalSlot;
        }
        getLastSlotInEpoch(e) {
          return this.getFirstSlotInEpoch(e) + this.getSlotsInEpoch(e) - 1;
        }
        getSlotsInEpoch(e) {
          return e < this.firstNormalEpoch
            ? Math.pow(2, e + eJ(32))
            : this.slotsPerEpoch;
        }
      }
      var eD = globalThis.fetch;
      class eH extends f.Z {
        constructor(e, t, r) {
          super(
            (e) => {
              let r = (0, k.Z)(e, {
                autoconnect: !0,
                max_reconnects: 5,
                reconnect: !0,
                reconnect_interval: 1e3,
                ...t,
              });
              return (
                "socket" in r
                  ? (this.underlyingSocket = r.socket)
                  : (this.underlyingSocket = r),
                r
              );
            },
            e,
            t,
            r
          ),
            (this.underlyingSocket = void 0);
        }
        call(...e) {
          let t = this.underlyingSocket?.readyState;
          return 1 === t
            ? super.call(...e)
            : Promise.reject(
                Error(
                  "Tried to call a JSON-RPC method `" +
                    e[0] +
                    "` but the socket was not `CONNECTING` or `OPEN` (`readyState` was " +
                    t +
                    ")"
                )
              );
        }
        notify(...e) {
          let t = this.underlyingSocket?.readyState;
          return 1 === t
            ? super.notify(...e)
            : Promise.reject(
                Error(
                  "Tried to send a JSON-RPC notification `" +
                    e[0] +
                    "` but the socket was not `CONNECTING` or `OPEN` (`readyState` was " +
                    t +
                    ")"
                )
              );
        }
      }
      class e$ {
        constructor(e) {
          (this.key = void 0),
            (this.state = void 0),
            (this.key = e.key),
            (this.state = e.state);
        }
        isActive() {
          let e = BigInt("0xffffffffffffffff");
          return this.state.deactivationSlot === e;
        }
        static deserialize(e) {
          let t = (function (e, t) {
              let r;
              try {
                r = e.layout.decode(t);
              } catch (e) {
                throw Error("invalid instruction; " + e);
              }
              if (r.typeIndex !== e.index)
                throw Error(
                  `invalid account data; account type mismatch ${r.typeIndex} != ${e.index}`
                );
              return r;
            })(eF, e),
            r = e.length - 56;
          G(r >= 0, "lookup table is invalid"),
            G(r % 32 == 0, "lookup table is invalid");
          let { addresses: n } = g
            .n_([g.A9(H(), r / 32, "addresses")])
            .decode(e.slice(56));
          return {
            deactivationSlot: t.deactivationSlot,
            lastExtendedSlot: t.lastExtendedSlot,
            lastExtendedSlotStartIndex: t.lastExtendedStartIndex,
            authority:
              0 !== t.authority.length ? new W(t.authority[0]) : void 0,
            addresses: n.map((e) => new W(e)),
          };
        }
      }
      let eF = {
          index: 1,
          layout: g.n_([
            g.Jq("typeIndex"),
            eC("deactivationSlot"),
            g._O("lastExtendedSlot"),
            g.u8("lastExtendedStartIndex"),
            g.u8(),
            g.A9(H(), g.cv(g.u8(), -1), "authority"),
          ]),
        },
        ej = /^[^:]+:\/\/([^:[]+|\[[^\]]+\])(:\d+)?(.*)/i,
        eY = (0, y.coerce)(
          (0, y.instance)(W),
          (0, y.string)(),
          (e) => new W(e)
        ),
        eG = (0, y.tuple)([(0, y.string)(), (0, y.literal)("base64")]),
        eX = (0, y.coerce)((0, y.instance)(s.Buffer), eG, (e) =>
          s.Buffer.from(e[0], "base64")
        ),
        eZ = 3e4;
      function eQ(e) {
        let t, r;
        if ("string" == typeof e) t = e;
        else if (e) {
          let { commitment: n, ...i } = e;
          (t = n), (r = i);
        }
        return { commitment: t, config: r };
      }
      function e0(e) {
        return (0, y.union)([
          (0, y.type)({
            jsonrpc: (0, y.literal)("2.0"),
            id: (0, y.string)(),
            result: e,
          }),
          (0, y.type)({
            jsonrpc: (0, y.literal)("2.0"),
            id: (0, y.string)(),
            error: (0, y.type)({
              code: (0, y.unknown)(),
              message: (0, y.string)(),
              data: (0, y.optional)((0, y.any)()),
            }),
          }),
        ]);
      }
      let e1 = e0((0, y.unknown)());
      function e8(e) {
        return (0, y.coerce)(e0(e), e1, (t) =>
          "error" in t ? t : { ...t, result: (0, y.create)(t.result, e) }
        );
      }
      function e2(e) {
        return e8(
          (0, y.type)({
            context: (0, y.type)({ slot: (0, y.number)() }),
            value: e,
          })
        );
      }
      function e5(e) {
        return (0, y.type)({
          context: (0, y.type)({ slot: (0, y.number)() }),
          value: e,
        });
      }
      function e3(e, t) {
        return 0 === e
          ? new er({
              header: t.header,
              staticAccountKeys: t.accountKeys.map((e) => new W(e)),
              recentBlockhash: t.recentBlockhash,
              compiledInstructions: t.instructions.map((e) => ({
                programIdIndex: e.programIdIndex,
                accountKeyIndexes: e.accounts,
                data: l().decode(e.data),
              })),
              addressTableLookups: t.addressTableLookups,
            })
          : new et(t);
      }
      let e4 = (0, y.type)({
          foundation: (0, y.number)(),
          foundationTerm: (0, y.number)(),
          initial: (0, y.number)(),
          taper: (0, y.number)(),
          terminal: (0, y.number)(),
        }),
        e6 = e8(
          (0, y.array)(
            (0, y.nullable)(
              (0, y.type)({
                epoch: (0, y.number)(),
                effectiveSlot: (0, y.number)(),
                amount: (0, y.number)(),
                postBalance: (0, y.number)(),
                commission: (0, y.optional)((0, y.nullable)((0, y.number)())),
              })
            )
          )
        ),
        e9 = (0, y.array)(
          (0, y.type)({
            slot: (0, y.number)(),
            prioritizationFee: (0, y.number)(),
          })
        ),
        e7 = (0, y.type)({
          total: (0, y.number)(),
          validator: (0, y.number)(),
          foundation: (0, y.number)(),
          epoch: (0, y.number)(),
        }),
        te = (0, y.type)({
          epoch: (0, y.number)(),
          slotIndex: (0, y.number)(),
          slotsInEpoch: (0, y.number)(),
          absoluteSlot: (0, y.number)(),
          blockHeight: (0, y.optional)((0, y.number)()),
          transactionCount: (0, y.optional)((0, y.number)()),
        }),
        tt = (0, y.type)({
          slotsPerEpoch: (0, y.number)(),
          leaderScheduleSlotOffset: (0, y.number)(),
          warmup: (0, y.boolean)(),
          firstNormalEpoch: (0, y.number)(),
          firstNormalSlot: (0, y.number)(),
        }),
        tr = (0, y.record)((0, y.string)(), (0, y.array)((0, y.number)())),
        tn = (0, y.nullable)((0, y.union)([(0, y.type)({}), (0, y.string)()])),
        ti = (0, y.type)({ err: tn }),
        ts = (0, y.literal)("receivedSignature"),
        ta = (0, y.type)({
          "solana-core": (0, y.string)(),
          "feature-set": (0, y.optional)((0, y.number)()),
        }),
        to = e2(
          (0, y.type)({
            err: (0, y.nullable)(
              (0, y.union)([(0, y.type)({}), (0, y.string)()])
            ),
            logs: (0, y.nullable)((0, y.array)((0, y.string)())),
            accounts: (0, y.optional)(
              (0, y.nullable)(
                (0, y.array)(
                  (0, y.nullable)(
                    (0, y.type)({
                      executable: (0, y.boolean)(),
                      owner: (0, y.string)(),
                      lamports: (0, y.number)(),
                      data: (0, y.array)((0, y.string)()),
                      rentEpoch: (0, y.optional)((0, y.number)()),
                    })
                  )
                )
              )
            ),
            unitsConsumed: (0, y.optional)((0, y.number)()),
            returnData: (0, y.optional)(
              (0, y.nullable)(
                (0, y.type)({
                  programId: (0, y.string)(),
                  data: (0, y.tuple)([
                    (0, y.string)(),
                    (0, y.literal)("base64"),
                  ]),
                })
              )
            ),
          })
        ),
        tc = e2(
          (0, y.type)({
            byIdentity: (0, y.record)(
              (0, y.string)(),
              (0, y.array)((0, y.number)())
            ),
            range: (0, y.type)({
              firstSlot: (0, y.number)(),
              lastSlot: (0, y.number)(),
            }),
          })
        ),
        tu = e8(e4),
        tl = e8(e7),
        td = e8(e9),
        th = e8(te),
        tg = e8(tt),
        tp = e8(tr),
        ty = e8((0, y.number)()),
        tb = e2(
          (0, y.type)({
            total: (0, y.number)(),
            circulating: (0, y.number)(),
            nonCirculating: (0, y.number)(),
            nonCirculatingAccounts: (0, y.array)(eY),
          })
        ),
        tm = (0, y.type)({
          amount: (0, y.string)(),
          uiAmount: (0, y.nullable)((0, y.number)()),
          decimals: (0, y.number)(),
          uiAmountString: (0, y.optional)((0, y.string)()),
        }),
        tf = e2(
          (0, y.array)(
            (0, y.type)({
              address: eY,
              amount: (0, y.string)(),
              uiAmount: (0, y.nullable)((0, y.number)()),
              decimals: (0, y.number)(),
              uiAmountString: (0, y.optional)((0, y.string)()),
            })
          )
        ),
        tk = e2(
          (0, y.array)(
            (0, y.type)({
              pubkey: eY,
              account: (0, y.type)({
                executable: (0, y.boolean)(),
                owner: eY,
                lamports: (0, y.number)(),
                data: eX,
                rentEpoch: (0, y.number)(),
              }),
            })
          )
        ),
        tw = (0, y.type)({
          program: (0, y.string)(),
          parsed: (0, y.unknown)(),
          space: (0, y.number)(),
        }),
        tS = e2(
          (0, y.array)(
            (0, y.type)({
              pubkey: eY,
              account: (0, y.type)({
                executable: (0, y.boolean)(),
                owner: eY,
                lamports: (0, y.number)(),
                data: tw,
                rentEpoch: (0, y.number)(),
              }),
            })
          )
        ),
        tI = e2(
          (0, y.array)((0, y.type)({ lamports: (0, y.number)(), address: eY }))
        ),
        t_ = (0, y.type)({
          executable: (0, y.boolean)(),
          owner: eY,
          lamports: (0, y.number)(),
          data: eX,
          rentEpoch: (0, y.number)(),
        }),
        tA = (0, y.type)({ pubkey: eY, account: t_ }),
        tP = (0, y.coerce)(
          (0, y.union)([(0, y.instance)(s.Buffer), tw]),
          (0, y.union)([eG, tw]),
          (e) => (Array.isArray(e) ? (0, y.create)(e, eX) : e)
        ),
        tv = (0, y.type)({
          executable: (0, y.boolean)(),
          owner: eY,
          lamports: (0, y.number)(),
          data: tP,
          rentEpoch: (0, y.number)(),
        }),
        tE = (0, y.type)({ pubkey: eY, account: tv }),
        tB = (0, y.type)({
          state: (0, y.union)([
            (0, y.literal)("active"),
            (0, y.literal)("inactive"),
            (0, y.literal)("activating"),
            (0, y.literal)("deactivating"),
          ]),
          active: (0, y.number)(),
          inactive: (0, y.number)(),
        }),
        tT = e8(
          (0, y.array)(
            (0, y.type)({
              signature: (0, y.string)(),
              slot: (0, y.number)(),
              err: tn,
              memo: (0, y.nullable)((0, y.string)()),
              blockTime: (0, y.optional)((0, y.nullable)((0, y.number)())),
            })
          )
        ),
        tR = e8(
          (0, y.array)(
            (0, y.type)({
              signature: (0, y.string)(),
              slot: (0, y.number)(),
              err: tn,
              memo: (0, y.nullable)((0, y.string)()),
              blockTime: (0, y.optional)((0, y.nullable)((0, y.number)())),
            })
          )
        ),
        tC = (0, y.type)({ subscription: (0, y.number)(), result: e5(t_) }),
        tx = (0, y.type)({ pubkey: eY, account: t_ }),
        tL = (0, y.type)({ subscription: (0, y.number)(), result: e5(tx) }),
        tO = (0, y.type)({
          parent: (0, y.number)(),
          slot: (0, y.number)(),
          root: (0, y.number)(),
        }),
        tW = (0, y.type)({ subscription: (0, y.number)(), result: tO }),
        tK = (0, y.union)([
          (0, y.type)({
            type: (0, y.union)([
              (0, y.literal)("firstShredReceived"),
              (0, y.literal)("completed"),
              (0, y.literal)("optimisticConfirmation"),
              (0, y.literal)("root"),
            ]),
            slot: (0, y.number)(),
            timestamp: (0, y.number)(),
          }),
          (0, y.type)({
            type: (0, y.literal)("createdBank"),
            parent: (0, y.number)(),
            slot: (0, y.number)(),
            timestamp: (0, y.number)(),
          }),
          (0, y.type)({
            type: (0, y.literal)("frozen"),
            slot: (0, y.number)(),
            timestamp: (0, y.number)(),
            stats: (0, y.type)({
              numTransactionEntries: (0, y.number)(),
              numSuccessfulTransactions: (0, y.number)(),
              numFailedTransactions: (0, y.number)(),
              maxTransactionsPerEntry: (0, y.number)(),
            }),
          }),
          (0, y.type)({
            type: (0, y.literal)("dead"),
            slot: (0, y.number)(),
            timestamp: (0, y.number)(),
            err: (0, y.string)(),
          }),
        ]),
        tN = (0, y.type)({ subscription: (0, y.number)(), result: tK }),
        tz = (0, y.type)({
          subscription: (0, y.number)(),
          result: e5((0, y.union)([ti, ts])),
        }),
        tq = (0, y.type)({
          subscription: (0, y.number)(),
          result: (0, y.number)(),
        }),
        tU = (0, y.type)({
          pubkey: (0, y.string)(),
          gossip: (0, y.nullable)((0, y.string)()),
          tpu: (0, y.nullable)((0, y.string)()),
          rpc: (0, y.nullable)((0, y.string)()),
          version: (0, y.nullable)((0, y.string)()),
        }),
        tM = (0, y.type)({
          votePubkey: (0, y.string)(),
          nodePubkey: (0, y.string)(),
          activatedStake: (0, y.number)(),
          epochVoteAccount: (0, y.boolean)(),
          epochCredits: (0, y.array)(
            (0, y.tuple)([(0, y.number)(), (0, y.number)(), (0, y.number)()])
          ),
          commission: (0, y.number)(),
          lastVote: (0, y.number)(),
          rootSlot: (0, y.nullable)((0, y.number)()),
        }),
        tJ = e8(
          (0, y.type)({
            current: (0, y.array)(tM),
            delinquent: (0, y.array)(tM),
          })
        ),
        tV = (0, y.union)([
          (0, y.literal)("processed"),
          (0, y.literal)("confirmed"),
          (0, y.literal)("finalized"),
        ]),
        tD = (0, y.type)({
          slot: (0, y.number)(),
          confirmations: (0, y.nullable)((0, y.number)()),
          err: tn,
          confirmationStatus: (0, y.optional)(tV),
        }),
        tH = e2((0, y.array)((0, y.nullable)(tD))),
        t$ = e8((0, y.number)()),
        tF = (0, y.type)({
          accountKey: eY,
          writableIndexes: (0, y.array)((0, y.number)()),
          readonlyIndexes: (0, y.array)((0, y.number)()),
        }),
        tj = (0, y.type)({
          signatures: (0, y.array)((0, y.string)()),
          message: (0, y.type)({
            accountKeys: (0, y.array)((0, y.string)()),
            header: (0, y.type)({
              numRequiredSignatures: (0, y.number)(),
              numReadonlySignedAccounts: (0, y.number)(),
              numReadonlyUnsignedAccounts: (0, y.number)(),
            }),
            instructions: (0, y.array)(
              (0, y.type)({
                accounts: (0, y.array)((0, y.number)()),
                data: (0, y.string)(),
                programIdIndex: (0, y.number)(),
              })
            ),
            recentBlockhash: (0, y.string)(),
            addressTableLookups: (0, y.optional)((0, y.array)(tF)),
          }),
        }),
        tY = (0, y.type)({
          pubkey: eY,
          signer: (0, y.boolean)(),
          writable: (0, y.boolean)(),
          source: (0, y.optional)(
            (0, y.union)([
              (0, y.literal)("transaction"),
              (0, y.literal)("lookupTable"),
            ])
          ),
        }),
        tG = (0, y.type)({
          accountKeys: (0, y.array)(tY),
          signatures: (0, y.array)((0, y.string)()),
        }),
        tX = (0, y.type)({
          parsed: (0, y.unknown)(),
          program: (0, y.string)(),
          programId: eY,
        }),
        tZ = (0, y.type)({
          accounts: (0, y.array)(eY),
          data: (0, y.string)(),
          programId: eY,
        }),
        tQ = (0, y.union)([tZ, tX]),
        t0 = (0, y.union)([
          (0, y.type)({
            parsed: (0, y.unknown)(),
            program: (0, y.string)(),
            programId: (0, y.string)(),
          }),
          (0, y.type)({
            accounts: (0, y.array)((0, y.string)()),
            data: (0, y.string)(),
            programId: (0, y.string)(),
          }),
        ]),
        t1 = (0, y.coerce)(tQ, t0, (e) =>
          "accounts" in e ? (0, y.create)(e, tZ) : (0, y.create)(e, tX)
        ),
        t8 = (0, y.type)({
          signatures: (0, y.array)((0, y.string)()),
          message: (0, y.type)({
            accountKeys: (0, y.array)(tY),
            instructions: (0, y.array)(t1),
            recentBlockhash: (0, y.string)(),
            addressTableLookups: (0, y.optional)(
              (0, y.nullable)((0, y.array)(tF))
            ),
          }),
        }),
        t2 = (0, y.type)({
          accountIndex: (0, y.number)(),
          mint: (0, y.string)(),
          owner: (0, y.optional)((0, y.string)()),
          uiTokenAmount: tm,
        }),
        t5 = (0, y.type)({
          writable: (0, y.array)(eY),
          readonly: (0, y.array)(eY),
        }),
        t3 = (0, y.type)({
          err: tn,
          fee: (0, y.number)(),
          innerInstructions: (0, y.optional)(
            (0, y.nullable)(
              (0, y.array)(
                (0, y.type)({
                  index: (0, y.number)(),
                  instructions: (0, y.array)(
                    (0, y.type)({
                      accounts: (0, y.array)((0, y.number)()),
                      data: (0, y.string)(),
                      programIdIndex: (0, y.number)(),
                    })
                  ),
                })
              )
            )
          ),
          preBalances: (0, y.array)((0, y.number)()),
          postBalances: (0, y.array)((0, y.number)()),
          logMessages: (0, y.optional)(
            (0, y.nullable)((0, y.array)((0, y.string)()))
          ),
          preTokenBalances: (0, y.optional)((0, y.nullable)((0, y.array)(t2))),
          postTokenBalances: (0, y.optional)((0, y.nullable)((0, y.array)(t2))),
          loadedAddresses: (0, y.optional)(t5),
          computeUnitsConsumed: (0, y.optional)((0, y.number)()),
        }),
        t4 = (0, y.type)({
          err: tn,
          fee: (0, y.number)(),
          innerInstructions: (0, y.optional)(
            (0, y.nullable)(
              (0, y.array)(
                (0, y.type)({
                  index: (0, y.number)(),
                  instructions: (0, y.array)(t1),
                })
              )
            )
          ),
          preBalances: (0, y.array)((0, y.number)()),
          postBalances: (0, y.array)((0, y.number)()),
          logMessages: (0, y.optional)(
            (0, y.nullable)((0, y.array)((0, y.string)()))
          ),
          preTokenBalances: (0, y.optional)((0, y.nullable)((0, y.array)(t2))),
          postTokenBalances: (0, y.optional)((0, y.nullable)((0, y.array)(t2))),
          loadedAddresses: (0, y.optional)(t5),
          computeUnitsConsumed: (0, y.optional)((0, y.number)()),
        }),
        t6 = (0, y.union)([(0, y.literal)(0), (0, y.literal)("legacy")]),
        t9 = (0, y.type)({
          pubkey: (0, y.string)(),
          lamports: (0, y.number)(),
          postBalance: (0, y.nullable)((0, y.number)()),
          rewardType: (0, y.nullable)((0, y.string)()),
          commission: (0, y.optional)((0, y.nullable)((0, y.number)())),
        }),
        t7 = e8(
          (0, y.nullable)(
            (0, y.type)({
              blockhash: (0, y.string)(),
              previousBlockhash: (0, y.string)(),
              parentSlot: (0, y.number)(),
              transactions: (0, y.array)(
                (0, y.type)({
                  transaction: tj,
                  meta: (0, y.nullable)(t3),
                  version: (0, y.optional)(t6),
                })
              ),
              rewards: (0, y.optional)((0, y.array)(t9)),
              blockTime: (0, y.nullable)((0, y.number)()),
              blockHeight: (0, y.nullable)((0, y.number)()),
            })
          )
        ),
        re = e8(
          (0, y.nullable)(
            (0, y.type)({
              blockhash: (0, y.string)(),
              previousBlockhash: (0, y.string)(),
              parentSlot: (0, y.number)(),
              rewards: (0, y.optional)((0, y.array)(t9)),
              blockTime: (0, y.nullable)((0, y.number)()),
              blockHeight: (0, y.nullable)((0, y.number)()),
            })
          )
        ),
        rt = e8(
          (0, y.nullable)(
            (0, y.type)({
              blockhash: (0, y.string)(),
              previousBlockhash: (0, y.string)(),
              parentSlot: (0, y.number)(),
              transactions: (0, y.array)(
                (0, y.type)({
                  transaction: tG,
                  meta: (0, y.nullable)(t3),
                  version: (0, y.optional)(t6),
                })
              ),
              rewards: (0, y.optional)((0, y.array)(t9)),
              blockTime: (0, y.nullable)((0, y.number)()),
              blockHeight: (0, y.nullable)((0, y.number)()),
            })
          )
        ),
        rr = e8(
          (0, y.nullable)(
            (0, y.type)({
              blockhash: (0, y.string)(),
              previousBlockhash: (0, y.string)(),
              parentSlot: (0, y.number)(),
              transactions: (0, y.array)(
                (0, y.type)({
                  transaction: t8,
                  meta: (0, y.nullable)(t4),
                  version: (0, y.optional)(t6),
                })
              ),
              rewards: (0, y.optional)((0, y.array)(t9)),
              blockTime: (0, y.nullable)((0, y.number)()),
              blockHeight: (0, y.nullable)((0, y.number)()),
            })
          )
        ),
        rn = e8(
          (0, y.nullable)(
            (0, y.type)({
              blockhash: (0, y.string)(),
              previousBlockhash: (0, y.string)(),
              parentSlot: (0, y.number)(),
              transactions: (0, y.array)(
                (0, y.type)({
                  transaction: tG,
                  meta: (0, y.nullable)(t4),
                  version: (0, y.optional)(t6),
                })
              ),
              rewards: (0, y.optional)((0, y.array)(t9)),
              blockTime: (0, y.nullable)((0, y.number)()),
              blockHeight: (0, y.nullable)((0, y.number)()),
            })
          )
        ),
        ri = e8(
          (0, y.nullable)(
            (0, y.type)({
              blockhash: (0, y.string)(),
              previousBlockhash: (0, y.string)(),
              parentSlot: (0, y.number)(),
              rewards: (0, y.optional)((0, y.array)(t9)),
              blockTime: (0, y.nullable)((0, y.number)()),
              blockHeight: (0, y.nullable)((0, y.number)()),
            })
          )
        ),
        rs = e8(
          (0, y.nullable)(
            (0, y.type)({
              blockhash: (0, y.string)(),
              previousBlockhash: (0, y.string)(),
              parentSlot: (0, y.number)(),
              transactions: (0, y.array)(
                (0, y.type)({ transaction: tj, meta: (0, y.nullable)(t3) })
              ),
              rewards: (0, y.optional)((0, y.array)(t9)),
              blockTime: (0, y.nullable)((0, y.number)()),
            })
          )
        ),
        ra = e8(
          (0, y.nullable)(
            (0, y.type)({
              blockhash: (0, y.string)(),
              previousBlockhash: (0, y.string)(),
              parentSlot: (0, y.number)(),
              signatures: (0, y.array)((0, y.string)()),
              blockTime: (0, y.nullable)((0, y.number)()),
            })
          )
        ),
        ro = e8(
          (0, y.nullable)(
            (0, y.type)({
              slot: (0, y.number)(),
              meta: (0, y.nullable)(t3),
              blockTime: (0, y.optional)((0, y.nullable)((0, y.number)())),
              transaction: tj,
              version: (0, y.optional)(t6),
            })
          )
        ),
        rc = e8(
          (0, y.nullable)(
            (0, y.type)({
              slot: (0, y.number)(),
              transaction: t8,
              meta: (0, y.nullable)(t4),
              blockTime: (0, y.optional)((0, y.nullable)((0, y.number)())),
              version: (0, y.optional)(t6),
            })
          )
        ),
        ru = e2(
          (0, y.type)({
            blockhash: (0, y.string)(),
            feeCalculator: (0, y.type)({
              lamportsPerSignature: (0, y.number)(),
            }),
          })
        ),
        rl = e2(
          (0, y.type)({
            blockhash: (0, y.string)(),
            lastValidBlockHeight: (0, y.number)(),
          })
        ),
        rd = e2((0, y.boolean)()),
        rh = (0, y.type)({
          slot: (0, y.number)(),
          numTransactions: (0, y.number)(),
          numSlots: (0, y.number)(),
          samplePeriodSecs: (0, y.number)(),
        }),
        rg = e8((0, y.array)(rh)),
        rp = e2(
          (0, y.nullable)(
            (0, y.type)({
              feeCalculator: (0, y.type)({
                lamportsPerSignature: (0, y.number)(),
              }),
            })
          )
        ),
        ry = e8((0, y.string)()),
        rb = e8((0, y.string)()),
        rm = (0, y.type)({
          err: tn,
          logs: (0, y.array)((0, y.string)()),
          signature: (0, y.string)(),
        }),
        rf = (0, y.type)({ result: e5(rm), subscription: (0, y.number)() }),
        rk = { "solana-client": "js/0.0.0-development" };
      class rw {
        constructor(e, t) {
          var r, n;
          let i, s, a, o, c, u;
          (this._commitment = void 0),
            (this._confirmTransactionInitialTimeout = void 0),
            (this._rpcEndpoint = void 0),
            (this._rpcWsEndpoint = void 0),
            (this._rpcClient = void 0),
            (this._rpcRequest = void 0),
            (this._rpcBatchRequest = void 0),
            (this._rpcWebSocket = void 0),
            (this._rpcWebSocketConnected = !1),
            (this._rpcWebSocketHeartbeat = null),
            (this._rpcWebSocketIdleTimeout = null),
            (this._rpcWebSocketGeneration = 0),
            (this._disableBlockhashCaching = !1),
            (this._pollingBlockhash = !1),
            (this._blockhashInfo = {
              latestBlockhash: null,
              lastFetch: 0,
              transactionSignatures: [],
              simulatedSignatures: [],
            }),
            (this._nextClientSubscriptionId = 0),
            (this._subscriptionDisposeFunctionsByClientSubscriptionId = {}),
            (this._subscriptionHashByClientSubscriptionId = {}),
            (this._subscriptionStateChangeCallbacksByHash = {}),
            (this._subscriptionCallbacksByServerSubscriptionId = {}),
            (this._subscriptionsByHash = {}),
            (this._subscriptionsAutoDisposedByRpc = new Set()),
            (this.getBlockHeight = (() => {
              let e = {};
              return async (t) => {
                let { commitment: r, config: n } = eQ(t),
                  i = this._buildArgs([], r, void 0, n),
                  s = eM(i);
                return (
                  (e[s] =
                    e[s] ??
                    (async () => {
                      try {
                        let e = await this._rpcRequest("getBlockHeight", i),
                          t = (0, y.create)(e, e8((0, y.number)()));
                        if ("error" in t)
                          throw new eS(
                            t.error,
                            "failed to get block height information"
                          );
                        return t.result;
                      } finally {
                        delete e[s];
                      }
                    })()),
                  await e[s]
                );
              };
            })()),
            t && "string" == typeof t
              ? (this._commitment = t)
              : t &&
                ((this._commitment = t.commitment),
                (this._confirmTransactionInitialTimeout =
                  t.confirmTransactionInitialTimeout),
                (i = t.wsEndpoint),
                (s = t.httpHeaders),
                (a = t.fetch),
                (o = t.fetchMiddleware),
                (c = t.disableRetryOnRateLimit),
                (u = t.httpAgent)),
            (this._rpcEndpoint = (function (e) {
              if (!1 === /^https?:/.test(e))
                throw TypeError(
                  "Endpoint URL must start with `http:` or `https:`."
                );
              return e;
            })(e)),
            (this._rpcWsEndpoint =
              i ||
              (function (e) {
                let t = e.match(ej);
                if (null == t)
                  throw TypeError(`Failed to validate endpoint URL \`${e}\``);
                let [r, n, i, s] = t,
                  a = e.startsWith("https:") ? "wss:" : "ws:",
                  o = null == i ? null : parseInt(i.slice(1), 10),
                  c = null == o ? "" : `:${o + 1}`;
                return `${a}//${n}${c}${s}`;
              })(e)),
            (this._rpcClient = (function (e, t, r, n, i, s) {
              let a, o;
              let c = r || eD;
              return (
                null != s &&
                  console.warn(
                    "You have supplied an `httpAgent` when creating a `Connection` in a browser environment.It has been ignored; `httpAgent` is only used in Node environments."
                  ),
                n &&
                  (o = async (e, t) => {
                    let r = await new Promise((r, i) => {
                      try {
                        n(e, t, (e, t) => r([e, t]));
                      } catch (e) {
                        i(e);
                      }
                    });
                    return await c(...r);
                  }),
                new (m())(async (r, n) => {
                  let s = {
                    method: "POST",
                    body: r,
                    agent: a,
                    headers: Object.assign(
                      { "Content-Type": "application/json" },
                      t || {},
                      rk
                    ),
                  };
                  try {
                    let t,
                      r = 5,
                      a = 500;
                    for (
                      ;
                      (t = o ? await o(e, s) : await c(e, s)),
                        429 === t.status && !0 !== i && ((r -= 1), 0 !== r);

                    )
                      console.error(
                        `Server responded with ${t.status} ${t.statusText}.  Retrying after ${a}ms delay...`
                      ),
                        await e_(a),
                        (a *= 2);
                    let u = await t.text();
                    t.ok
                      ? n(null, u)
                      : n(Error(`${t.status} ${t.statusText}: ${u}`));
                  } catch (e) {
                    e instanceof Error && n(e);
                  }
                }, {})
              );
            })(e, s, a, o, c, u)),
            (this._rpcRequest =
              ((r = this._rpcClient),
              (e, t) =>
                new Promise((n, i) => {
                  r.request(e, t, (e, t) => {
                    if (e) {
                      i(e);
                      return;
                    }
                    n(t);
                  });
                }))),
            (this._rpcBatchRequest =
              ((n = this._rpcClient),
              (e) =>
                new Promise((t, r) => {
                  0 === e.length && t([]);
                  let i = e.map((e) => n.request(e.methodName, e.args));
                  n.request(i, (e, n) => {
                    if (e) {
                      r(e);
                      return;
                    }
                    t(n);
                  });
                }))),
            (this._rpcWebSocket = new eH(this._rpcWsEndpoint, {
              autoconnect: !1,
              max_reconnects: 1 / 0,
            })),
            this._rpcWebSocket.on("open", this._wsOnOpen.bind(this)),
            this._rpcWebSocket.on("error", this._wsOnError.bind(this)),
            this._rpcWebSocket.on("close", this._wsOnClose.bind(this)),
            this._rpcWebSocket.on(
              "accountNotification",
              this._wsOnAccountNotification.bind(this)
            ),
            this._rpcWebSocket.on(
              "programNotification",
              this._wsOnProgramAccountNotification.bind(this)
            ),
            this._rpcWebSocket.on(
              "slotNotification",
              this._wsOnSlotNotification.bind(this)
            ),
            this._rpcWebSocket.on(
              "slotsUpdatesNotification",
              this._wsOnSlotUpdatesNotification.bind(this)
            ),
            this._rpcWebSocket.on(
              "signatureNotification",
              this._wsOnSignatureNotification.bind(this)
            ),
            this._rpcWebSocket.on(
              "rootNotification",
              this._wsOnRootNotification.bind(this)
            ),
            this._rpcWebSocket.on(
              "logsNotification",
              this._wsOnLogsNotification.bind(this)
            );
        }
        get commitment() {
          return this._commitment;
        }
        get rpcEndpoint() {
          return this._rpcEndpoint;
        }
        async getBalanceAndContext(e, t) {
          let { commitment: r, config: n } = eQ(t),
            i = this._buildArgs([e.toBase58()], r, void 0, n),
            s = await this._rpcRequest("getBalance", i),
            a = (0, y.create)(s, e2((0, y.number)()));
          if ("error" in a)
            throw new eS(a.error, `failed to get balance for ${e.toBase58()}`);
          return a.result;
        }
        async getBalance(e, t) {
          return await this.getBalanceAndContext(e, t)
            .then((e) => e.value)
            .catch((t) => {
              throw Error(
                "failed to get balance of account " + e.toBase58() + ": " + t
              );
            });
        }
        async getBlockTime(e) {
          let t = await this._rpcRequest("getBlockTime", [e]),
            r = (0, y.create)(t, e8((0, y.nullable)((0, y.number)())));
          if ("error" in r)
            throw new eS(r.error, `failed to get block time for slot ${e}`);
          return r.result;
        }
        async getMinimumLedgerSlot() {
          let e = await this._rpcRequest("minimumLedgerSlot", []),
            t = (0, y.create)(e, e8((0, y.number)()));
          if ("error" in t)
            throw new eS(t.error, "failed to get minimum ledger slot");
          return t.result;
        }
        async getFirstAvailableBlock() {
          let e = await this._rpcRequest("getFirstAvailableBlock", []),
            t = (0, y.create)(e, ty);
          if ("error" in t)
            throw new eS(t.error, "failed to get first available block");
          return t.result;
        }
        async getSupply(e) {
          let t = {};
          t =
            "string" == typeof e
              ? { commitment: e }
              : e
              ? { ...e, commitment: (e && e.commitment) || this.commitment }
              : { commitment: this.commitment };
          let r = await this._rpcRequest("getSupply", [t]),
            n = (0, y.create)(r, tb);
          if ("error" in n) throw new eS(n.error, "failed to get supply");
          return n.result;
        }
        async getTokenSupply(e, t) {
          let r = this._buildArgs([e.toBase58()], t),
            n = await this._rpcRequest("getTokenSupply", r),
            i = (0, y.create)(n, e2(tm));
          if ("error" in i) throw new eS(i.error, "failed to get token supply");
          return i.result;
        }
        async getTokenAccountBalance(e, t) {
          let r = this._buildArgs([e.toBase58()], t),
            n = await this._rpcRequest("getTokenAccountBalance", r),
            i = (0, y.create)(n, e2(tm));
          if ("error" in i)
            throw new eS(i.error, "failed to get token account balance");
          return i.result;
        }
        async getTokenAccountsByOwner(e, t, r) {
          let { commitment: n, config: i } = eQ(r),
            s = [e.toBase58()];
          "mint" in t
            ? s.push({ mint: t.mint.toBase58() })
            : s.push({ programId: t.programId.toBase58() });
          let a = this._buildArgs(s, n, "base64", i),
            o = await this._rpcRequest("getTokenAccountsByOwner", a),
            c = (0, y.create)(o, tk);
          if ("error" in c)
            throw new eS(
              c.error,
              `failed to get token accounts owned by account ${e.toBase58()}`
            );
          return c.result;
        }
        async getParsedTokenAccountsByOwner(e, t, r) {
          let n = [e.toBase58()];
          "mint" in t
            ? n.push({ mint: t.mint.toBase58() })
            : n.push({ programId: t.programId.toBase58() });
          let i = this._buildArgs(n, r, "jsonParsed"),
            s = await this._rpcRequest("getTokenAccountsByOwner", i),
            a = (0, y.create)(s, tS);
          if ("error" in a)
            throw new eS(
              a.error,
              `failed to get token accounts owned by account ${e.toBase58()}`
            );
          return a.result;
        }
        async getLargestAccounts(e) {
          let t = { ...e, commitment: (e && e.commitment) || this.commitment },
            r = t.filter || t.commitment ? [t] : [],
            n = await this._rpcRequest("getLargestAccounts", r),
            i = (0, y.create)(n, tI);
          if ("error" in i)
            throw new eS(i.error, "failed to get largest accounts");
          return i.result;
        }
        async getTokenLargestAccounts(e, t) {
          let r = this._buildArgs([e.toBase58()], t),
            n = await this._rpcRequest("getTokenLargestAccounts", r),
            i = (0, y.create)(n, tf);
          if ("error" in i)
            throw new eS(i.error, "failed to get token largest accounts");
          return i.result;
        }
        async getAccountInfoAndContext(e, t) {
          let { commitment: r, config: n } = eQ(t),
            i = this._buildArgs([e.toBase58()], r, "base64", n),
            s = await this._rpcRequest("getAccountInfo", i),
            a = (0, y.create)(s, e2((0, y.nullable)(t_)));
          if ("error" in a)
            throw new eS(
              a.error,
              `failed to get info about account ${e.toBase58()}`
            );
          return a.result;
        }
        async getParsedAccountInfo(e, t) {
          let { commitment: r, config: n } = eQ(t),
            i = this._buildArgs([e.toBase58()], r, "jsonParsed", n),
            s = await this._rpcRequest("getAccountInfo", i),
            a = (0, y.create)(s, e2((0, y.nullable)(tv)));
          if ("error" in a)
            throw new eS(
              a.error,
              `failed to get info about account ${e.toBase58()}`
            );
          return a.result;
        }
        async getAccountInfo(e, t) {
          try {
            return (await this.getAccountInfoAndContext(e, t)).value;
          } catch (t) {
            throw Error(
              "failed to get info about account " + e.toBase58() + ": " + t
            );
          }
        }
        async getMultipleParsedAccounts(e, t) {
          let { commitment: r, config: n } = eQ(t),
            i = e.map((e) => e.toBase58()),
            s = this._buildArgs([i], r, "jsonParsed", n),
            a = await this._rpcRequest("getMultipleAccounts", s),
            o = (0, y.create)(a, e2((0, y.array)((0, y.nullable)(tv))));
          if ("error" in o)
            throw new eS(o.error, `failed to get info for accounts ${i}`);
          return o.result;
        }
        async getMultipleAccountsInfoAndContext(e, t) {
          let { commitment: r, config: n } = eQ(t),
            i = e.map((e) => e.toBase58()),
            s = this._buildArgs([i], r, "base64", n),
            a = await this._rpcRequest("getMultipleAccounts", s),
            o = (0, y.create)(a, e2((0, y.array)((0, y.nullable)(t_))));
          if ("error" in o)
            throw new eS(o.error, `failed to get info for accounts ${i}`);
          return o.result;
        }
        async getMultipleAccountsInfo(e, t) {
          return (await this.getMultipleAccountsInfoAndContext(e, t)).value;
        }
        async getStakeActivation(e, t, r) {
          let { commitment: n, config: i } = eQ(t),
            s = this._buildArgs([e.toBase58()], n, void 0, {
              ...i,
              epoch: null != r ? r : i?.epoch,
            }),
            a = await this._rpcRequest("getStakeActivation", s),
            o = (0, y.create)(a, e8(tB));
          if ("error" in o)
            throw new eS(
              o.error,
              `failed to get Stake Activation ${e.toBase58()}`
            );
          return o.result;
        }
        async getProgramAccounts(e, t) {
          let { commitment: r, config: n } = eQ(t),
            { encoding: i, ...s } = n || {},
            a = this._buildArgs([e.toBase58()], r, i || "base64", s),
            o = await this._rpcRequest("getProgramAccounts", a),
            c = (0, y.array)(tA),
            u =
              !0 === s.withContext
                ? (0, y.create)(o, e2(c))
                : (0, y.create)(o, e8(c));
          if ("error" in u)
            throw new eS(
              u.error,
              `failed to get accounts owned by program ${e.toBase58()}`
            );
          return u.result;
        }
        async getParsedProgramAccounts(e, t) {
          let { commitment: r, config: n } = eQ(t),
            i = this._buildArgs([e.toBase58()], r, "jsonParsed", n),
            s = await this._rpcRequest("getProgramAccounts", i),
            a = (0, y.create)(s, e8((0, y.array)(tE)));
          if ("error" in a)
            throw new eS(
              a.error,
              `failed to get accounts owned by program ${e.toBase58()}`
            );
          return a.result;
        }
        async confirmTransaction(e, t) {
          let r, n;
          if ("string" == typeof e) r = e;
          else {
            if (e.abortSignal?.aborted)
              return Promise.reject(e.abortSignal.reason);
            r = e.signature;
          }
          try {
            n = l().decode(r);
          } catch (e) {
            throw Error("signature must be base58 encoded: " + r);
          }
          return (G(64 === n.length, "signature has invalid length"),
          "string" == typeof e)
            ? await this.confirmTransactionUsingLegacyTimeoutStrategy({
                commitment: t || this.commitment,
                signature: r,
              })
            : "lastValidBlockHeight" in e
            ? await this.confirmTransactionUsingBlockHeightExceedanceStrategy({
                commitment: t || this.commitment,
                strategy: e,
              })
            : await this.confirmTransactionUsingDurableNonceStrategy({
                commitment: t || this.commitment,
                strategy: e,
              });
        }
        getCancellationPromise(e) {
          return new Promise((t, r) => {
            null != e &&
              (e.aborted
                ? r(e.reason)
                : e.addEventListener("abort", () => {
                    r(e.reason);
                  }));
          });
        }
        getTransactionConfirmationPromise({ commitment: e, signature: t }) {
          let r, n;
          let i = !1;
          return {
            abortConfirmation: () => {
              n && (n(), (n = void 0)),
                null != r && (this.removeSignatureListener(r), (r = void 0));
            },
            confirmationPromise: new Promise((s, a) => {
              try {
                r = this.onSignature(
                  t,
                  (e, t) => {
                    (r = void 0),
                      s({
                        __type: ei.PROCESSED,
                        response: { context: t, value: e },
                      });
                  },
                  e
                );
                let o = new Promise((e) => {
                  null == r
                    ? e()
                    : (n = this._onSubscriptionStateChange(r, (t) => {
                        "subscribed" === t && e();
                      }));
                });
                (async () => {
                  if ((await o, i)) return;
                  let r = await this.getSignatureStatus(t);
                  if (i || null == r) return;
                  let { context: n, value: c } = r;
                  if (null != c) {
                    if (c?.err) a(c.err);
                    else {
                      switch (e) {
                        case "confirmed":
                        case "single":
                        case "singleGossip":
                          if ("processed" === c.confirmationStatus) return;
                          break;
                        case "finalized":
                        case "max":
                        case "root":
                          if (
                            "processed" === c.confirmationStatus ||
                            "confirmed" === c.confirmationStatus
                          )
                            return;
                      }
                      (i = !0),
                        s({
                          __type: ei.PROCESSED,
                          response: { context: n, value: c },
                        });
                    }
                  }
                })();
              } catch (e) {
                a(e);
              }
            }),
          };
        }
        async confirmTransactionUsingBlockHeightExceedanceStrategy({
          commitment: e,
          strategy: { abortSignal: t, lastValidBlockHeight: r, signature: n },
        }) {
          let i,
            s = !1,
            a = new Promise((t) => {
              let n = async () => {
                try {
                  return await this.getBlockHeight(e);
                } catch (e) {
                  return -1;
                }
              };
              (async () => {
                let e = await n();
                if (!s) {
                  for (; e <= r; )
                    if ((await e_(1e3), s || ((e = await n()), s))) return;
                  t({ __type: ei.BLOCKHEIGHT_EXCEEDED });
                }
              })();
            }),
            { abortConfirmation: o, confirmationPromise: c } =
              this.getTransactionConfirmationPromise({
                commitment: e,
                signature: n,
              }),
            u = this.getCancellationPromise(t);
          try {
            let e = await Promise.race([u, c, a]);
            if (e.__type === ei.PROCESSED) i = e.response;
            else throw new M(n);
          } finally {
            (s = !0), o();
          }
          return i;
        }
        async confirmTransactionUsingDurableNonceStrategy({
          commitment: e,
          strategy: {
            abortSignal: t,
            minContextSlot: r,
            nonceAccountPubkey: n,
            nonceValue: i,
            signature: s,
          },
        }) {
          let a,
            o = !1,
            c = new Promise((t) => {
              let s = i,
                a = null,
                c = async () => {
                  try {
                    let { context: t, value: i } =
                      await this.getNonceAndContext(n, {
                        commitment: e,
                        minContextSlot: r,
                      });
                    return (a = t.slot), i?.nonce;
                  } catch (e) {
                    return s;
                  }
                };
              (async () => {
                if (((s = await c()), !o))
                  for (;;) {
                    if (i !== s) {
                      t({
                        __type: ei.NONCE_INVALID,
                        slotInWhichNonceDidAdvance: a,
                      });
                      return;
                    }
                    if ((await e_(2e3), o || ((s = await c()), o))) return;
                  }
              })();
            }),
            { abortConfirmation: u, confirmationPromise: l } =
              this.getTransactionConfirmationPromise({
                commitment: e,
                signature: s,
              }),
            d = this.getCancellationPromise(t);
          try {
            let t = await Promise.race([d, l, c]);
            if (t.__type === ei.PROCESSED) a = t.response;
            else {
              let n;
              for (;;) {
                let e = await this.getSignatureStatus(s);
                if (null == e) break;
                if (e.context.slot < (t.slotInWhichNonceDidAdvance ?? r)) {
                  await e_(400);
                  continue;
                }
                n = e;
                break;
              }
              if (n?.value) {
                let t = e || "finalized",
                  { confirmationStatus: r } = n.value;
                switch (t) {
                  case "processed":
                  case "recent":
                    if (
                      "processed" !== r &&
                      "confirmed" !== r &&
                      "finalized" !== r
                    )
                      throw new V(s);
                    break;
                  case "confirmed":
                  case "single":
                  case "singleGossip":
                    if ("confirmed" !== r && "finalized" !== r) throw new V(s);
                    break;
                  case "finalized":
                  case "max":
                  case "root":
                    if ("finalized" !== r) throw new V(s);
                }
                a = { context: n.context, value: { err: n.value.err } };
              } else throw new V(s);
            }
          } finally {
            (o = !0), u();
          }
          return a;
        }
        async confirmTransactionUsingLegacyTimeoutStrategy({
          commitment: e,
          signature: t,
        }) {
          let r, n;
          let i = new Promise((t) => {
              let n = this._confirmTransactionInitialTimeout || 6e4;
              switch (e) {
                case "processed":
                case "recent":
                case "single":
                case "confirmed":
                case "singleGossip":
                  n = this._confirmTransactionInitialTimeout || 3e4;
              }
              r = setTimeout(
                () => t({ __type: ei.TIMED_OUT, timeoutMs: n }),
                n
              );
            }),
            { abortConfirmation: s, confirmationPromise: a } =
              this.getTransactionConfirmationPromise({
                commitment: e,
                signature: t,
              });
          try {
            let e = await Promise.race([a, i]);
            if (e.__type === ei.PROCESSED) n = e.response;
            else throw new J(t, e.timeoutMs / 1e3);
          } finally {
            clearTimeout(r), s();
          }
          return n;
        }
        async getClusterNodes() {
          let e = await this._rpcRequest("getClusterNodes", []),
            t = (0, y.create)(e, e8((0, y.array)(tU)));
          if ("error" in t)
            throw new eS(t.error, "failed to get cluster nodes");
          return t.result;
        }
        async getVoteAccounts(e) {
          let t = this._buildArgs([], e),
            r = await this._rpcRequest("getVoteAccounts", t),
            n = (0, y.create)(r, tJ);
          if ("error" in n)
            throw new eS(n.error, "failed to get vote accounts");
          return n.result;
        }
        async getSlot(e) {
          let { commitment: t, config: r } = eQ(e),
            n = this._buildArgs([], t, void 0, r),
            i = await this._rpcRequest("getSlot", n),
            s = (0, y.create)(i, e8((0, y.number)()));
          if ("error" in s) throw new eS(s.error, "failed to get slot");
          return s.result;
        }
        async getSlotLeader(e) {
          let { commitment: t, config: r } = eQ(e),
            n = this._buildArgs([], t, void 0, r),
            i = await this._rpcRequest("getSlotLeader", n),
            s = (0, y.create)(i, e8((0, y.string)()));
          if ("error" in s) throw new eS(s.error, "failed to get slot leader");
          return s.result;
        }
        async getSlotLeaders(e, t) {
          let r = await this._rpcRequest("getSlotLeaders", [e, t]),
            n = (0, y.create)(r, e8((0, y.array)(eY)));
          if ("error" in n) throw new eS(n.error, "failed to get slot leaders");
          return n.result;
        }
        async getSignatureStatus(e, t) {
          let { context: r, value: n } = await this.getSignatureStatuses(
            [e],
            t
          );
          return G(1 === n.length), { context: r, value: n[0] };
        }
        async getSignatureStatuses(e, t) {
          let r = [e];
          t && r.push(t);
          let n = await this._rpcRequest("getSignatureStatuses", r),
            i = (0, y.create)(n, tH);
          if ("error" in i)
            throw new eS(i.error, "failed to get signature status");
          return i.result;
        }
        async getTransactionCount(e) {
          let { commitment: t, config: r } = eQ(e),
            n = this._buildArgs([], t, void 0, r),
            i = await this._rpcRequest("getTransactionCount", n),
            s = (0, y.create)(i, e8((0, y.number)()));
          if ("error" in s)
            throw new eS(s.error, "failed to get transaction count");
          return s.result;
        }
        async getTotalSupply(e) {
          return (
            await this.getSupply({
              commitment: e,
              excludeNonCirculatingAccountsList: !0,
            })
          ).value.total;
        }
        async getInflationGovernor(e) {
          let t = this._buildArgs([], e),
            r = await this._rpcRequest("getInflationGovernor", t),
            n = (0, y.create)(r, tu);
          if ("error" in n) throw new eS(n.error, "failed to get inflation");
          return n.result;
        }
        async getInflationReward(e, t, r) {
          let { commitment: n, config: i } = eQ(r),
            s = this._buildArgs([e.map((e) => e.toBase58())], n, void 0, {
              ...i,
              epoch: null != t ? t : i?.epoch,
            }),
            a = await this._rpcRequest("getInflationReward", s),
            o = (0, y.create)(a, e6);
          if ("error" in o)
            throw new eS(o.error, "failed to get inflation reward");
          return o.result;
        }
        async getInflationRate() {
          let e = await this._rpcRequest("getInflationRate", []),
            t = (0, y.create)(e, tl);
          if ("error" in t)
            throw new eS(t.error, "failed to get inflation rate");
          return t.result;
        }
        async getEpochInfo(e) {
          let { commitment: t, config: r } = eQ(e),
            n = this._buildArgs([], t, void 0, r),
            i = await this._rpcRequest("getEpochInfo", n),
            s = (0, y.create)(i, th);
          if ("error" in s) throw new eS(s.error, "failed to get epoch info");
          return s.result;
        }
        async getEpochSchedule() {
          let e = await this._rpcRequest("getEpochSchedule", []),
            t = (0, y.create)(e, tg);
          if ("error" in t)
            throw new eS(t.error, "failed to get epoch schedule");
          let r = t.result;
          return new eV(
            r.slotsPerEpoch,
            r.leaderScheduleSlotOffset,
            r.warmup,
            r.firstNormalEpoch,
            r.firstNormalSlot
          );
        }
        async getLeaderSchedule() {
          let e = await this._rpcRequest("getLeaderSchedule", []),
            t = (0, y.create)(e, tp);
          if ("error" in t)
            throw new eS(t.error, "failed to get leader schedule");
          return t.result;
        }
        async getMinimumBalanceForRentExemption(e, t) {
          let r = this._buildArgs([e], t),
            n = await this._rpcRequest("getMinimumBalanceForRentExemption", r),
            i = (0, y.create)(n, t$);
          return "error" in i
            ? (console.warn(
                "Unable to fetch minimum balance for rent exemption"
              ),
              0)
            : i.result;
        }
        async getRecentBlockhashAndContext(e) {
          let t = this._buildArgs([], e),
            r = await this._rpcRequest("getRecentBlockhash", t),
            n = (0, y.create)(r, ru);
          if ("error" in n)
            throw new eS(n.error, "failed to get recent blockhash");
          return n.result;
        }
        async getRecentPerformanceSamples(e) {
          let t = await this._rpcRequest(
              "getRecentPerformanceSamples",
              e ? [e] : []
            ),
            r = (0, y.create)(t, rg);
          if ("error" in r)
            throw new eS(r.error, "failed to get recent performance samples");
          return r.result;
        }
        async getFeeCalculatorForBlockhash(e, t) {
          let r = this._buildArgs([e], t),
            n = await this._rpcRequest("getFeeCalculatorForBlockhash", r),
            i = (0, y.create)(n, rp);
          if ("error" in i)
            throw new eS(i.error, "failed to get fee calculator");
          let { context: s, value: a } = i.result;
          return { context: s, value: null !== a ? a.feeCalculator : null };
        }
        async getFeeForMessage(e, t) {
          let r = B(e.serialize()).toString("base64"),
            n = this._buildArgs([r], t),
            i = await this._rpcRequest("getFeeForMessage", n),
            s = (0, y.create)(i, e2((0, y.nullable)((0, y.number)())));
          if ("error" in s)
            throw new eS(s.error, "failed to get fee for message");
          if (null === s.result) throw Error("invalid blockhash");
          return s.result;
        }
        async getRecentPrioritizationFees(e) {
          let t = e?.lockedWritableAccounts?.map((e) => e.toBase58()),
            r = t?.length ? [t] : [],
            n = await this._rpcRequest("getRecentPrioritizationFees", r),
            i = (0, y.create)(n, td);
          if ("error" in i)
            throw new eS(i.error, "failed to get recent prioritization fees");
          return i.result;
        }
        async getRecentBlockhash(e) {
          try {
            return (await this.getRecentBlockhashAndContext(e)).value;
          } catch (e) {
            throw Error("failed to get recent blockhash: " + e);
          }
        }
        async getLatestBlockhash(e) {
          try {
            return (await this.getLatestBlockhashAndContext(e)).value;
          } catch (e) {
            throw Error("failed to get recent blockhash: " + e);
          }
        }
        async getLatestBlockhashAndContext(e) {
          let { commitment: t, config: r } = eQ(e),
            n = this._buildArgs([], t, void 0, r),
            i = await this._rpcRequest("getLatestBlockhash", n),
            s = (0, y.create)(i, rl);
          if ("error" in s)
            throw new eS(s.error, "failed to get latest blockhash");
          return s.result;
        }
        async isBlockhashValid(e, t) {
          let { commitment: r, config: n } = eQ(t),
            i = this._buildArgs([e], r, void 0, n),
            s = await this._rpcRequest("isBlockhashValid", i),
            a = (0, y.create)(s, rd);
          if ("error" in a)
            throw new eS(
              a.error,
              "failed to determine if the blockhash `" + e + "`is valid"
            );
          return a.result;
        }
        async getVersion() {
          let e = await this._rpcRequest("getVersion", []),
            t = (0, y.create)(e, e8(ta));
          if ("error" in t) throw new eS(t.error, "failed to get version");
          return t.result;
        }
        async getGenesisHash() {
          let e = await this._rpcRequest("getGenesisHash", []),
            t = (0, y.create)(e, e8((0, y.string)()));
          if ("error" in t) throw new eS(t.error, "failed to get genesis hash");
          return t.result;
        }
        async getBlock(e, t) {
          let { commitment: r, config: n } = eQ(t),
            i = this._buildArgsAtLeastConfirmed([e], r, void 0, n),
            s = await this._rpcRequest("getBlock", i);
          try {
            switch (n?.transactionDetails) {
              case "accounts": {
                let e = (0, y.create)(s, rt);
                if ("error" in e) throw e.error;
                return e.result;
              }
              case "none": {
                let e = (0, y.create)(s, re);
                if ("error" in e) throw e.error;
                return e.result;
              }
              default: {
                let e = (0, y.create)(s, t7);
                if ("error" in e) throw e.error;
                let { result: t } = e;
                return t
                  ? {
                      ...t,
                      transactions: t.transactions.map(
                        ({ transaction: e, meta: t, version: r }) => ({
                          meta: t,
                          transaction: { ...e, message: e3(r, e.message) },
                          version: r,
                        })
                      ),
                    }
                  : null;
              }
            }
          } catch (e) {
            throw new eS(e, "failed to get confirmed block");
          }
        }
        async getParsedBlock(e, t) {
          let { commitment: r, config: n } = eQ(t),
            i = this._buildArgsAtLeastConfirmed([e], r, "jsonParsed", n),
            s = await this._rpcRequest("getBlock", i);
          try {
            switch (n?.transactionDetails) {
              case "accounts": {
                let e = (0, y.create)(s, rn);
                if ("error" in e) throw e.error;
                return e.result;
              }
              case "none": {
                let e = (0, y.create)(s, ri);
                if ("error" in e) throw e.error;
                return e.result;
              }
              default: {
                let e = (0, y.create)(s, rr);
                if ("error" in e) throw e.error;
                return e.result;
              }
            }
          } catch (e) {
            throw new eS(e, "failed to get block");
          }
        }
        async getBlockProduction(e) {
          let t, r;
          if ("string" == typeof e) r = e;
          else if (e) {
            let { commitment: n, ...i } = e;
            (r = n), (t = i);
          }
          let n = this._buildArgs([], r, "base64", t),
            i = await this._rpcRequest("getBlockProduction", n),
            s = (0, y.create)(i, tc);
          if ("error" in s)
            throw new eS(s.error, "failed to get block production information");
          return s.result;
        }
        async getTransaction(e, t) {
          let { commitment: r, config: n } = eQ(t),
            i = this._buildArgsAtLeastConfirmed([e], r, void 0, n),
            s = await this._rpcRequest("getTransaction", i),
            a = (0, y.create)(s, ro);
          if ("error" in a) throw new eS(a.error, "failed to get transaction");
          let o = a.result;
          return o
            ? {
                ...o,
                transaction: {
                  ...o.transaction,
                  message: e3(o.version, o.transaction.message),
                },
              }
            : o;
        }
        async getParsedTransaction(e, t) {
          let { commitment: r, config: n } = eQ(t),
            i = this._buildArgsAtLeastConfirmed([e], r, "jsonParsed", n),
            s = await this._rpcRequest("getTransaction", i),
            a = (0, y.create)(s, rc);
          if ("error" in a) throw new eS(a.error, "failed to get transaction");
          return a.result;
        }
        async getParsedTransactions(e, t) {
          let { commitment: r, config: n } = eQ(t),
            i = e.map((e) => ({
              methodName: "getTransaction",
              args: this._buildArgsAtLeastConfirmed([e], r, "jsonParsed", n),
            }));
          return (await this._rpcBatchRequest(i)).map((e) => {
            let t = (0, y.create)(e, rc);
            if ("error" in t)
              throw new eS(t.error, "failed to get transactions");
            return t.result;
          });
        }
        async getTransactions(e, t) {
          let { commitment: r, config: n } = eQ(t),
            i = e.map((e) => ({
              methodName: "getTransaction",
              args: this._buildArgsAtLeastConfirmed([e], r, void 0, n),
            }));
          return (await this._rpcBatchRequest(i)).map((e) => {
            let t = (0, y.create)(e, ro);
            if ("error" in t)
              throw new eS(t.error, "failed to get transactions");
            let r = t.result;
            return r
              ? {
                  ...r,
                  transaction: {
                    ...r.transaction,
                    message: e3(r.version, r.transaction.message),
                  },
                }
              : r;
          });
        }
        async getConfirmedBlock(e, t) {
          let r = this._buildArgsAtLeastConfirmed([e], t),
            n = await this._rpcRequest("getConfirmedBlock", r),
            i = (0, y.create)(n, rs);
          if ("error" in i)
            throw new eS(i.error, "failed to get confirmed block");
          let s = i.result;
          if (!s) throw Error("Confirmed block " + e + " not found");
          let a = {
            ...s,
            transactions: s.transactions.map(({ transaction: e, meta: t }) => {
              let r = new et(e.message);
              return { meta: t, transaction: { ...e, message: r } };
            }),
          };
          return {
            ...a,
            transactions: a.transactions.map(({ transaction: e, meta: t }) => ({
              meta: t,
              transaction: eo.populate(e.message, e.signatures),
            })),
          };
        }
        async getBlocks(e, t, r) {
          let n = this._buildArgsAtLeastConfirmed(
              void 0 !== t ? [e, t] : [e],
              r
            ),
            i = await this._rpcRequest("getBlocks", n),
            s = (0, y.create)(i, e8((0, y.array)((0, y.number)())));
          if ("error" in s) throw new eS(s.error, "failed to get blocks");
          return s.result;
        }
        async getBlockSignatures(e, t) {
          let r = this._buildArgsAtLeastConfirmed([e], t, void 0, {
              transactionDetails: "signatures",
              rewards: !1,
            }),
            n = await this._rpcRequest("getBlock", r),
            i = (0, y.create)(n, ra);
          if ("error" in i) throw new eS(i.error, "failed to get block");
          let s = i.result;
          if (!s) throw Error("Block " + e + " not found");
          return s;
        }
        async getConfirmedBlockSignatures(e, t) {
          let r = this._buildArgsAtLeastConfirmed([e], t, void 0, {
              transactionDetails: "signatures",
              rewards: !1,
            }),
            n = await this._rpcRequest("getConfirmedBlock", r),
            i = (0, y.create)(n, ra);
          if ("error" in i)
            throw new eS(i.error, "failed to get confirmed block");
          let s = i.result;
          if (!s) throw Error("Confirmed block " + e + " not found");
          return s;
        }
        async getConfirmedTransaction(e, t) {
          let r = this._buildArgsAtLeastConfirmed([e], t),
            n = await this._rpcRequest("getConfirmedTransaction", r),
            i = (0, y.create)(n, ro);
          if ("error" in i) throw new eS(i.error, "failed to get transaction");
          let s = i.result;
          if (!s) return s;
          let a = new et(s.transaction.message),
            o = s.transaction.signatures;
          return { ...s, transaction: eo.populate(a, o) };
        }
        async getParsedConfirmedTransaction(e, t) {
          let r = this._buildArgsAtLeastConfirmed([e], t, "jsonParsed"),
            n = await this._rpcRequest("getConfirmedTransaction", r),
            i = (0, y.create)(n, rc);
          if ("error" in i)
            throw new eS(i.error, "failed to get confirmed transaction");
          return i.result;
        }
        async getParsedConfirmedTransactions(e, t) {
          let r = e.map((e) => ({
            methodName: "getConfirmedTransaction",
            args: this._buildArgsAtLeastConfirmed([e], t, "jsonParsed"),
          }));
          return (await this._rpcBatchRequest(r)).map((e) => {
            let t = (0, y.create)(e, rc);
            if ("error" in t)
              throw new eS(t.error, "failed to get confirmed transactions");
            return t.result;
          });
        }
        async getConfirmedSignaturesForAddress(e, t, r) {
          let n = {},
            i = await this.getFirstAvailableBlock();
          for (; !("until" in n) && !(--t <= 0) && !(t < i); )
            try {
              let e = await this.getConfirmedBlockSignatures(t, "finalized");
              e.signatures.length > 0 &&
                (n.until = e.signatures[e.signatures.length - 1].toString());
            } catch (e) {
              if (e instanceof Error && e.message.includes("skipped")) continue;
              throw e;
            }
          let s = await this.getSlot("finalized");
          for (; !("before" in n) && !(++r > s); )
            try {
              let e = await this.getConfirmedBlockSignatures(r);
              e.signatures.length > 0 &&
                (n.before = e.signatures[e.signatures.length - 1].toString());
            } catch (e) {
              if (e instanceof Error && e.message.includes("skipped")) continue;
              throw e;
            }
          return (await this.getConfirmedSignaturesForAddress2(e, n)).map(
            (e) => e.signature
          );
        }
        async getConfirmedSignaturesForAddress2(e, t, r) {
          let n = this._buildArgsAtLeastConfirmed([e.toBase58()], r, void 0, t),
            i = await this._rpcRequest("getConfirmedSignaturesForAddress2", n),
            s = (0, y.create)(i, tT);
          if ("error" in s)
            throw new eS(
              s.error,
              "failed to get confirmed signatures for address"
            );
          return s.result;
        }
        async getSignaturesForAddress(e, t, r) {
          let n = this._buildArgsAtLeastConfirmed([e.toBase58()], r, void 0, t),
            i = await this._rpcRequest("getSignaturesForAddress", n),
            s = (0, y.create)(i, tR);
          if ("error" in s)
            throw new eS(s.error, "failed to get signatures for address");
          return s.result;
        }
        async getAddressLookupTable(e, t) {
          let { context: r, value: n } = await this.getAccountInfoAndContext(
              e,
              t
            ),
            i = null;
          return (
            null !== n &&
              (i = new e$({ key: e, state: e$.deserialize(n.data) })),
            { context: r, value: i }
          );
        }
        async getNonceAndContext(e, t) {
          let { context: r, value: n } = await this.getAccountInfoAndContext(
              e,
              t
            ),
            i = null;
          return (
            null !== n && (i = eT.fromAccountData(n.data)),
            { context: r, value: i }
          );
        }
        async getNonce(e, t) {
          return await this.getNonceAndContext(e, t)
            .then((e) => e.value)
            .catch((t) => {
              throw Error(
                "failed to get nonce for account " + e.toBase58() + ": " + t
              );
            });
        }
        async requestAirdrop(e, t) {
          let r = await this._rpcRequest("requestAirdrop", [e.toBase58(), t]),
            n = (0, y.create)(r, ry);
          if ("error" in n)
            throw new eS(n.error, `airdrop to ${e.toBase58()} failed`);
          return n.result;
        }
        async _blockhashWithExpiryBlockHeight(e) {
          if (!e) {
            for (; this._pollingBlockhash; ) await e_(100);
            let e = Date.now() - this._blockhashInfo.lastFetch;
            if (null !== this._blockhashInfo.latestBlockhash && !(e >= eZ))
              return this._blockhashInfo.latestBlockhash;
          }
          return await this._pollNewBlockhash();
        }
        async _pollNewBlockhash() {
          this._pollingBlockhash = !0;
          try {
            let e = Date.now(),
              t = this._blockhashInfo.latestBlockhash,
              r = t ? t.blockhash : null;
            for (let e = 0; e < 50; e++) {
              let e = await this.getLatestBlockhash("finalized");
              if (r !== e.blockhash)
                return (
                  (this._blockhashInfo = {
                    latestBlockhash: e,
                    lastFetch: Date.now(),
                    transactionSignatures: [],
                    simulatedSignatures: [],
                  }),
                  e
                );
              await e_(200);
            }
            throw Error(
              `Unable to obtain a new blockhash after ${Date.now() - e}ms`
            );
          } finally {
            this._pollingBlockhash = !1;
          }
        }
        async getStakeMinimumDelegation(e) {
          let { commitment: t, config: r } = eQ(e),
            n = this._buildArgs([], t, "base64", r),
            i = await this._rpcRequest("getStakeMinimumDelegation", n),
            s = (0, y.create)(i, e2((0, y.number)()));
          if ("error" in s)
            throw new eS(s.error, "failed to get stake minimum delegation");
          return s.result;
        }
        async simulateTransaction(e, t, r) {
          let n;
          if ("message" in e) {
            let n = e.serialize(),
              i = s.Buffer.from(n).toString("base64");
            if (Array.isArray(t) || void 0 !== r)
              throw Error("Invalid arguments");
            let a = t || {};
            (a.encoding = "base64"),
              "commitment" in a || (a.commitment = this.commitment);
            let o = await this._rpcRequest("simulateTransaction", [i, a]),
              c = (0, y.create)(o, to);
            if ("error" in c)
              throw Error("failed to simulate transaction: " + c.error.message);
            return c.result;
          }
          if (
            (e instanceof eo
              ? (((n = new eo()).feePayer = e.feePayer),
                (n.instructions = e.instructions),
                (n.nonceInfo = e.nonceInfo),
                (n.signatures = e.signatures))
              : ((n = eo.populate(e))._message = n._json = void 0),
            void 0 !== t && !Array.isArray(t))
          )
            throw Error("Invalid arguments");
          if (n.nonceInfo && t) n.sign(...t);
          else {
            let e = this._disableBlockhashCaching;
            for (;;) {
              let r = await this._blockhashWithExpiryBlockHeight(e);
              if (
                ((n.lastValidBlockHeight = r.lastValidBlockHeight),
                (n.recentBlockhash = r.blockhash),
                !t)
              )
                break;
              if ((n.sign(...t), !n.signature)) throw Error("!signature");
              let i = n.signature.toString("base64");
              if (
                this._blockhashInfo.simulatedSignatures.includes(i) ||
                this._blockhashInfo.transactionSignatures.includes(i)
              )
                e = !0;
              else {
                this._blockhashInfo.simulatedSignatures.push(i);
                break;
              }
            }
          }
          let i = n._compile(),
            a = i.serialize(),
            o = n._serialize(a).toString("base64"),
            c = { encoding: "base64", commitment: this.commitment };
          if (r) {
            let e = (Array.isArray(r) ? r : i.nonProgramIds()).map((e) =>
              e.toBase58()
            );
            c.accounts = { encoding: "base64", addresses: e };
          }
          t && (c.sigVerify = !0);
          let u = await this._rpcRequest("simulateTransaction", [o, c]),
            l = (0, y.create)(u, to);
          if ("error" in l) {
            let e;
            if (
              "data" in l.error &&
              (e = l.error.data.logs) &&
              Array.isArray(e)
            ) {
              let t = "\n    ",
                r = t + e.join(t);
              console.error(l.error.message, r);
            }
            throw new ek({
              action: "simulate",
              signature: "",
              transactionMessage: l.error.message,
              logs: e,
            });
          }
          return l.result;
        }
        async sendTransaction(e, t, r) {
          if ("version" in e) {
            if (t && Array.isArray(t)) throw Error("Invalid arguments");
            let r = e.serialize();
            return await this.sendRawTransaction(r, t);
          }
          if (void 0 === t || !Array.isArray(t))
            throw Error("Invalid arguments");
          if (e.nonceInfo) e.sign(...t);
          else {
            let r = this._disableBlockhashCaching;
            for (;;) {
              let n = await this._blockhashWithExpiryBlockHeight(r);
              if (
                ((e.lastValidBlockHeight = n.lastValidBlockHeight),
                (e.recentBlockhash = n.blockhash),
                e.sign(...t),
                !e.signature)
              )
                throw Error("!signature");
              let i = e.signature.toString("base64");
              if (this._blockhashInfo.transactionSignatures.includes(i)) r = !0;
              else {
                this._blockhashInfo.transactionSignatures.push(i);
                break;
              }
            }
          }
          let n = e.serialize();
          return await this.sendRawTransaction(n, r);
        }
        async sendRawTransaction(e, t) {
          let r = B(e).toString("base64");
          return await this.sendEncodedTransaction(r, t);
        }
        async sendEncodedTransaction(e, t) {
          let r = { encoding: "base64" },
            n = t && t.skipPreflight,
            i =
              !0 === n
                ? "processed"
                : (t && t.preflightCommitment) || this.commitment;
          t && null != t.maxRetries && (r.maxRetries = t.maxRetries),
            t &&
              null != t.minContextSlot &&
              (r.minContextSlot = t.minContextSlot),
            n && (r.skipPreflight = n),
            i && (r.preflightCommitment = i);
          let s = await this._rpcRequest("sendTransaction", [e, r]),
            a = (0, y.create)(s, rb);
          if ("error" in a) {
            let e;
            throw (
              ("data" in a.error && (e = a.error.data.logs),
              new ek({
                action: n ? "send" : "simulate",
                signature: "",
                transactionMessage: a.error.message,
                logs: e,
              }))
            );
          }
          return a.result;
        }
        _wsOnOpen() {
          (this._rpcWebSocketConnected = !0),
            (this._rpcWebSocketHeartbeat = setInterval(() => {
              (async () => {
                try {
                  await this._rpcWebSocket.notify("ping");
                } catch {}
              })();
            }, 5e3)),
            this._updateSubscriptions();
        }
        _wsOnError(e) {
          (this._rpcWebSocketConnected = !1),
            console.error("ws error:", e.message);
        }
        _wsOnClose(e) {
          if (
            ((this._rpcWebSocketConnected = !1),
            (this._rpcWebSocketGeneration =
              (this._rpcWebSocketGeneration + 1) % Number.MAX_SAFE_INTEGER),
            this._rpcWebSocketIdleTimeout &&
              (clearTimeout(this._rpcWebSocketIdleTimeout),
              (this._rpcWebSocketIdleTimeout = null)),
            this._rpcWebSocketHeartbeat &&
              (clearInterval(this._rpcWebSocketHeartbeat),
              (this._rpcWebSocketHeartbeat = null)),
            1e3 === e)
          ) {
            this._updateSubscriptions();
            return;
          }
          (this._subscriptionCallbacksByServerSubscriptionId = {}),
            Object.entries(this._subscriptionsByHash).forEach(([e, t]) => {
              this._setSubscription(e, { ...t, state: "pending" });
            });
        }
        _setSubscription(e, t) {
          let r = this._subscriptionsByHash[e]?.state;
          if (((this._subscriptionsByHash[e] = t), r !== t.state)) {
            let r = this._subscriptionStateChangeCallbacksByHash[e];
            r &&
              r.forEach((e) => {
                try {
                  e(t.state);
                } catch {}
              });
          }
        }
        _onSubscriptionStateChange(e, t) {
          let r = this._subscriptionHashByClientSubscriptionId[e];
          if (null == r) return () => {};
          let n = (this._subscriptionStateChangeCallbacksByHash[r] ||=
            new Set());
          return (
            n.add(t),
            () => {
              n.delete(t),
                0 === n.size &&
                  delete this._subscriptionStateChangeCallbacksByHash[r];
            }
          );
        }
        async _updateSubscriptions() {
          if (0 === Object.keys(this._subscriptionsByHash).length) {
            this._rpcWebSocketConnected &&
              ((this._rpcWebSocketConnected = !1),
              (this._rpcWebSocketIdleTimeout = setTimeout(() => {
                this._rpcWebSocketIdleTimeout = null;
                try {
                  this._rpcWebSocket.close();
                } catch (e) {
                  e instanceof Error &&
                    console.log(
                      `Error when closing socket connection: ${e.message}`
                    );
                }
              }, 500)));
            return;
          }
          if (
            (null !== this._rpcWebSocketIdleTimeout &&
              (clearTimeout(this._rpcWebSocketIdleTimeout),
              (this._rpcWebSocketIdleTimeout = null),
              (this._rpcWebSocketConnected = !0)),
            !this._rpcWebSocketConnected)
          ) {
            this._rpcWebSocket.connect();
            return;
          }
          let e = this._rpcWebSocketGeneration,
            t = () => e === this._rpcWebSocketGeneration;
          await Promise.all(
            Object.keys(this._subscriptionsByHash).map(async (e) => {
              let r = this._subscriptionsByHash[e];
              if (void 0 !== r)
                switch (r.state) {
                  case "pending":
                  case "unsubscribed":
                    if (0 === r.callbacks.size) {
                      delete this._subscriptionsByHash[e],
                        "unsubscribed" === r.state &&
                          delete this
                            ._subscriptionCallbacksByServerSubscriptionId[
                            r.serverSubscriptionId
                          ],
                        await this._updateSubscriptions();
                      return;
                    }
                    await (async () => {
                      let { args: n, method: i } = r;
                      try {
                        this._setSubscription(e, {
                          ...r,
                          state: "subscribing",
                        });
                        let t = await this._rpcWebSocket.call(i, n);
                        this._setSubscription(e, {
                          ...r,
                          serverSubscriptionId: t,
                          state: "subscribed",
                        }),
                          (this._subscriptionCallbacksByServerSubscriptionId[
                            t
                          ] = r.callbacks),
                          await this._updateSubscriptions();
                      } catch (s) {
                        if (
                          (s instanceof Error &&
                            console.error(
                              `${i} error for argument`,
                              n,
                              s.message
                            ),
                          !t())
                        )
                          return;
                        this._setSubscription(e, { ...r, state: "pending" }),
                          await this._updateSubscriptions();
                      }
                    })();
                    break;
                  case "subscribed":
                    0 === r.callbacks.size &&
                      (await (async () => {
                        let { serverSubscriptionId: n, unsubscribeMethod: i } =
                          r;
                        if (this._subscriptionsAutoDisposedByRpc.has(n))
                          this._subscriptionsAutoDisposedByRpc.delete(n);
                        else {
                          this._setSubscription(e, {
                            ...r,
                            state: "unsubscribing",
                          }),
                            this._setSubscription(e, {
                              ...r,
                              state: "unsubscribing",
                            });
                          try {
                            await this._rpcWebSocket.call(i, [n]);
                          } catch (n) {
                            if (
                              (n instanceof Error &&
                                console.error(`${i} error:`, n.message),
                              !t())
                            )
                              return;
                            this._setSubscription(e, {
                              ...r,
                              state: "subscribed",
                            }),
                              await this._updateSubscriptions();
                            return;
                          }
                        }
                        this._setSubscription(e, {
                          ...r,
                          state: "unsubscribed",
                        }),
                          await this._updateSubscriptions();
                      })());
                }
            })
          );
        }
        _handleServerNotification(e, t) {
          let r = this._subscriptionCallbacksByServerSubscriptionId[e];
          void 0 !== r &&
            r.forEach((e) => {
              try {
                e(...t);
              } catch (e) {
                console.error(e);
              }
            });
        }
        _wsOnAccountNotification(e) {
          let { result: t, subscription: r } = (0, y.create)(e, tC);
          this._handleServerNotification(r, [t.value, t.context]);
        }
        _makeSubscription(e, t) {
          let r = this._nextClientSubscriptionId++,
            n = eM([e.method, t]),
            i = this._subscriptionsByHash[n];
          return (
            void 0 === i
              ? (this._subscriptionsByHash[n] = {
                  ...e,
                  args: t,
                  callbacks: new Set([e.callback]),
                  state: "pending",
                })
              : i.callbacks.add(e.callback),
            (this._subscriptionHashByClientSubscriptionId[r] = n),
            (this._subscriptionDisposeFunctionsByClientSubscriptionId[r] =
              async () => {
                delete this._subscriptionDisposeFunctionsByClientSubscriptionId[
                  r
                ],
                  delete this._subscriptionHashByClientSubscriptionId[r];
                let t = this._subscriptionsByHash[n];
                G(
                  void 0 !== t,
                  `Could not find a \`Subscription\` when tearing down client subscription #${r}`
                ),
                  t.callbacks.delete(e.callback),
                  await this._updateSubscriptions();
              }),
            this._updateSubscriptions(),
            r
          );
        }
        onAccountChange(e, t, r) {
          let n = this._buildArgs(
            [e.toBase58()],
            r || this._commitment || "finalized",
            "base64"
          );
          return this._makeSubscription(
            {
              callback: t,
              method: "accountSubscribe",
              unsubscribeMethod: "accountUnsubscribe",
            },
            n
          );
        }
        async removeAccountChangeListener(e) {
          await this._unsubscribeClientSubscription(e, "account change");
        }
        _wsOnProgramAccountNotification(e) {
          let { result: t, subscription: r } = (0, y.create)(e, tL);
          this._handleServerNotification(r, [
            { accountId: t.value.pubkey, accountInfo: t.value.account },
            t.context,
          ]);
        }
        onProgramAccountChange(e, t, r, n) {
          let i = this._buildArgs(
            [e.toBase58()],
            r || this._commitment || "finalized",
            "base64",
            n ? { filters: n } : void 0
          );
          return this._makeSubscription(
            {
              callback: t,
              method: "programSubscribe",
              unsubscribeMethod: "programUnsubscribe",
            },
            i
          );
        }
        async removeProgramAccountChangeListener(e) {
          await this._unsubscribeClientSubscription(
            e,
            "program account change"
          );
        }
        onLogs(e, t, r) {
          let n = this._buildArgs(
            ["object" == typeof e ? { mentions: [e.toString()] } : e],
            r || this._commitment || "finalized"
          );
          return this._makeSubscription(
            {
              callback: t,
              method: "logsSubscribe",
              unsubscribeMethod: "logsUnsubscribe",
            },
            n
          );
        }
        async removeOnLogsListener(e) {
          await this._unsubscribeClientSubscription(e, "logs");
        }
        _wsOnLogsNotification(e) {
          let { result: t, subscription: r } = (0, y.create)(e, rf);
          this._handleServerNotification(r, [t.value, t.context]);
        }
        _wsOnSlotNotification(e) {
          let { result: t, subscription: r } = (0, y.create)(e, tW);
          this._handleServerNotification(r, [t]);
        }
        onSlotChange(e) {
          return this._makeSubscription(
            {
              callback: e,
              method: "slotSubscribe",
              unsubscribeMethod: "slotUnsubscribe",
            },
            []
          );
        }
        async removeSlotChangeListener(e) {
          await this._unsubscribeClientSubscription(e, "slot change");
        }
        _wsOnSlotUpdatesNotification(e) {
          let { result: t, subscription: r } = (0, y.create)(e, tN);
          this._handleServerNotification(r, [t]);
        }
        onSlotUpdate(e) {
          return this._makeSubscription(
            {
              callback: e,
              method: "slotsUpdatesSubscribe",
              unsubscribeMethod: "slotsUpdatesUnsubscribe",
            },
            []
          );
        }
        async removeSlotUpdateListener(e) {
          await this._unsubscribeClientSubscription(e, "slot update");
        }
        async _unsubscribeClientSubscription(e, t) {
          let r = this._subscriptionDisposeFunctionsByClientSubscriptionId[e];
          r
            ? await r()
            : console.warn(
                `Ignored unsubscribe request because an active subscription with id \`${e}\` for '${t}' events could not be found.`
              );
        }
        _buildArgs(e, t, r, n) {
          let i = t || this._commitment;
          if (i || r || n) {
            let t = {};
            r && (t.encoding = r),
              i && (t.commitment = i),
              n && (t = Object.assign(t, n)),
              e.push(t);
          }
          return e;
        }
        _buildArgsAtLeastConfirmed(e, t, r, n) {
          let i = t || this._commitment;
          if (i && !["confirmed", "finalized"].includes(i))
            throw Error(
              "Using Connection with default commitment: `" +
                this._commitment +
                "`, but method requires at least `confirmed`"
            );
          return this._buildArgs(e, t, r, n);
        }
        _wsOnSignatureNotification(e) {
          let { result: t, subscription: r } = (0, y.create)(e, tz);
          "receivedSignature" !== t.value &&
            this._subscriptionsAutoDisposedByRpc.add(r),
            this._handleServerNotification(
              r,
              "receivedSignature" === t.value
                ? [{ type: "received" }, t.context]
                : [{ type: "status", result: t.value }, t.context]
            );
        }
        onSignature(e, t, r) {
          let n = this._buildArgs([e], r || this._commitment || "finalized"),
            i = this._makeSubscription(
              {
                callback: (e, r) => {
                  if ("status" === e.type) {
                    t(e.result, r);
                    try {
                      this.removeSignatureListener(i);
                    } catch (e) {}
                  }
                },
                method: "signatureSubscribe",
                unsubscribeMethod: "signatureUnsubscribe",
              },
              n
            );
          return i;
        }
        onSignatureWithOptions(e, t, r) {
          let { commitment: n, ...i } = {
              ...r,
              commitment:
                (r && r.commitment) || this._commitment || "finalized",
            },
            s = this._buildArgs([e], n, void 0, i),
            a = this._makeSubscription(
              {
                callback: (e, r) => {
                  t(e, r);
                  try {
                    this.removeSignatureListener(a);
                  } catch (e) {}
                },
                method: "signatureSubscribe",
                unsubscribeMethod: "signatureUnsubscribe",
              },
              s
            );
          return a;
        }
        async removeSignatureListener(e) {
          await this._unsubscribeClientSubscription(e, "signature result");
        }
        _wsOnRootNotification(e) {
          let { result: t, subscription: r } = (0, y.create)(e, tq);
          this._handleServerNotification(r, [t]);
        }
        onRootChange(e) {
          return this._makeSubscription(
            {
              callback: e,
              method: "rootSubscribe",
              unsubscribeMethod: "rootUnsubscribe",
            },
            []
          );
        }
        async removeRootChangeListener(e) {
          await this._unsubscribeClientSubscription(e, "root change");
        }
      }
      class rS {
        constructor(e) {
          (this._keypair = void 0), (this._keypair = e ?? _());
        }
        static generate() {
          return new rS(_());
        }
        static fromSecretKey(e, t) {
          if (64 !== e.byteLength) throw Error("bad secret key size");
          let r = e.slice(32, 64);
          if (!t || !t.skipValidation) {
            let t = A(e.slice(0, 32));
            for (let e = 0; e < 32; e++)
              if (r[e] !== t[e]) throw Error("provided secretKey is invalid");
          }
          return new rS({ publicKey: r, secretKey: e });
        }
        static fromSeed(e) {
          let t = A(e),
            r = new Uint8Array(64);
          return r.set(e), r.set(t, 32), new rS({ publicKey: t, secretKey: r });
        }
        get publicKey() {
          return new W(this._keypair.publicKey);
        }
        get secretKey() {
          return new Uint8Array(this._keypair.secretKey);
        }
      }
      let rI = Object.freeze({
        CreateLookupTable: {
          index: 0,
          layout: g.n_([
            g.Jq("instruction"),
            eC("recentSlot"),
            g.u8("bumpSeed"),
          ]),
        },
        FreezeLookupTable: { index: 1, layout: g.n_([g.Jq("instruction")]) },
        ExtendLookupTable: {
          index: 2,
          layout: g.n_([
            g.Jq("instruction"),
            eC(),
            g.A9(H(), g.cv(g.Jq(), -8), "addresses"),
          ]),
        },
        DeactivateLookupTable: {
          index: 3,
          layout: g.n_([g.Jq("instruction")]),
        },
        CloseLookupTable: { index: 4, layout: g.n_([g.Jq("instruction")]) },
      });
      class r_ {
        constructor() {}
        static decodeInstructionType(e) {
          let t;
          this.checkProgramId(e.programId);
          let r = g.Jq("instruction").decode(e.data);
          for (let [e, n] of Object.entries(rI))
            if (n.index == r) {
              t = e;
              break;
            }
          if (!t)
            throw Error(
              "Invalid Instruction. Should be a LookupTable Instruction"
            );
          return t;
        }
        static decodeCreateLookupTable(e) {
          this.checkProgramId(e.programId), this.checkKeysLength(e.keys, 4);
          let { recentSlot: t } = eP(rI.CreateLookupTable, e.data);
          return {
            authority: e.keys[1].pubkey,
            payer: e.keys[2].pubkey,
            recentSlot: Number(t),
          };
        }
        static decodeExtendLookupTable(e) {
          if ((this.checkProgramId(e.programId), e.keys.length < 2))
            throw Error(
              `invalid instruction; found ${e.keys.length} keys, expected at least 2`
            );
          let { addresses: t } = eP(rI.ExtendLookupTable, e.data);
          return {
            lookupTable: e.keys[0].pubkey,
            authority: e.keys[1].pubkey,
            payer: e.keys.length > 2 ? e.keys[2].pubkey : void 0,
            addresses: t.map((e) => new W(e)),
          };
        }
        static decodeCloseLookupTable(e) {
          return (
            this.checkProgramId(e.programId),
            this.checkKeysLength(e.keys, 3),
            {
              lookupTable: e.keys[0].pubkey,
              authority: e.keys[1].pubkey,
              recipient: e.keys[2].pubkey,
            }
          );
        }
        static decodeFreezeLookupTable(e) {
          return (
            this.checkProgramId(e.programId),
            this.checkKeysLength(e.keys, 2),
            { lookupTable: e.keys[0].pubkey, authority: e.keys[1].pubkey }
          );
        }
        static decodeDeactivateLookupTable(e) {
          return (
            this.checkProgramId(e.programId),
            this.checkKeysLength(e.keys, 2),
            { lookupTable: e.keys[0].pubkey, authority: e.keys[1].pubkey }
          );
        }
        static checkProgramId(e) {
          if (!e.equals(rA.programId))
            throw Error(
              "invalid instruction; programId is not AddressLookupTable Program"
            );
        }
        static checkKeysLength(e, t) {
          if (e.length < t)
            throw Error(
              `invalid instruction; found ${e.length} keys, expected at least ${t}`
            );
        }
      }
      class rA {
        constructor() {}
        static createLookupTable(e) {
          let [t, r] = W.findProgramAddressSync(
              [e.authority.toBuffer(), (0, p.k$)(BigInt(e.recentSlot), 8)],
              this.programId
            ),
            n = eA(rI.CreateLookupTable, {
              recentSlot: BigInt(e.recentSlot),
              bumpSeed: r,
            }),
            i = [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: e.authority, isSigner: !0, isWritable: !1 },
              { pubkey: e.payer, isSigner: !0, isWritable: !0 },
              { pubkey: eO.programId, isSigner: !1, isWritable: !1 },
            ];
          return [new ea({ programId: this.programId, keys: i, data: n }), t];
        }
        static freezeLookupTable(e) {
          let t = eA(rI.FreezeLookupTable),
            r = [
              { pubkey: e.lookupTable, isSigner: !1, isWritable: !0 },
              { pubkey: e.authority, isSigner: !0, isWritable: !1 },
            ];
          return new ea({ programId: this.programId, keys: r, data: t });
        }
        static extendLookupTable(e) {
          let t = eA(rI.ExtendLookupTable, {
              addresses: e.addresses.map((e) => e.toBytes()),
            }),
            r = [
              { pubkey: e.lookupTable, isSigner: !1, isWritable: !0 },
              { pubkey: e.authority, isSigner: !0, isWritable: !1 },
            ];
          return (
            e.payer &&
              r.push(
                { pubkey: e.payer, isSigner: !0, isWritable: !0 },
                { pubkey: eO.programId, isSigner: !1, isWritable: !1 }
              ),
            new ea({ programId: this.programId, keys: r, data: t })
          );
        }
        static deactivateLookupTable(e) {
          let t = eA(rI.DeactivateLookupTable),
            r = [
              { pubkey: e.lookupTable, isSigner: !1, isWritable: !0 },
              { pubkey: e.authority, isSigner: !0, isWritable: !1 },
            ];
          return new ea({ programId: this.programId, keys: r, data: t });
        }
        static closeLookupTable(e) {
          let t = eA(rI.CloseLookupTable),
            r = [
              { pubkey: e.lookupTable, isSigner: !1, isWritable: !0 },
              { pubkey: e.authority, isSigner: !0, isWritable: !1 },
              { pubkey: e.recipient, isSigner: !1, isWritable: !0 },
            ];
          return new ea({ programId: this.programId, keys: r, data: t });
        }
      }
      rA.programId = new W("AddressLookupTab1e1111111111111111111111111");
      class rP {
        constructor() {}
        static decodeInstructionType(e) {
          let t;
          this.checkProgramId(e.programId);
          let r = g.u8("instruction").decode(e.data);
          for (let [e, n] of Object.entries(rv))
            if (n.index == r) {
              t = e;
              break;
            }
          if (!t)
            throw Error(
              "Instruction type incorrect; not a ComputeBudgetInstruction"
            );
          return t;
        }
        static decodeRequestUnits(e) {
          this.checkProgramId(e.programId);
          let { units: t, additionalFee: r } = eP(rv.RequestUnits, e.data);
          return { units: t, additionalFee: r };
        }
        static decodeRequestHeapFrame(e) {
          this.checkProgramId(e.programId);
          let { bytes: t } = eP(rv.RequestHeapFrame, e.data);
          return { bytes: t };
        }
        static decodeSetComputeUnitLimit(e) {
          this.checkProgramId(e.programId);
          let { units: t } = eP(rv.SetComputeUnitLimit, e.data);
          return { units: t };
        }
        static decodeSetComputeUnitPrice(e) {
          this.checkProgramId(e.programId);
          let { microLamports: t } = eP(rv.SetComputeUnitPrice, e.data);
          return { microLamports: t };
        }
        static checkProgramId(e) {
          if (!e.equals(rE.programId))
            throw Error(
              "invalid instruction; programId is not ComputeBudgetProgram"
            );
        }
      }
      let rv = Object.freeze({
        RequestUnits: {
          index: 0,
          layout: g.n_([
            g.u8("instruction"),
            g.Jq("units"),
            g.Jq("additionalFee"),
          ]),
        },
        RequestHeapFrame: {
          index: 1,
          layout: g.n_([g.u8("instruction"), g.Jq("bytes")]),
        },
        SetComputeUnitLimit: {
          index: 2,
          layout: g.n_([g.u8("instruction"), g.Jq("units")]),
        },
        SetComputeUnitPrice: {
          index: 3,
          layout: g.n_([g.u8("instruction"), eC("microLamports")]),
        },
      });
      class rE {
        constructor() {}
        static requestUnits(e) {
          let t = eA(rv.RequestUnits, e);
          return new ea({ keys: [], programId: this.programId, data: t });
        }
        static requestHeapFrame(e) {
          let t = eA(rv.RequestHeapFrame, e);
          return new ea({ keys: [], programId: this.programId, data: t });
        }
        static setComputeUnitLimit(e) {
          let t = eA(rv.SetComputeUnitLimit, e);
          return new ea({ keys: [], programId: this.programId, data: t });
        }
        static setComputeUnitPrice(e) {
          let t = eA(rv.SetComputeUnitPrice, {
            microLamports: BigInt(e.microLamports),
          });
          return new ea({ keys: [], programId: this.programId, data: t });
        }
      }
      rE.programId = new W("ComputeBudget111111111111111111111111111111");
      let rB = g.n_([
        g.u8("numSignatures"),
        g.u8("padding"),
        g.KB("signatureOffset"),
        g.KB("signatureInstructionIndex"),
        g.KB("publicKeyOffset"),
        g.KB("publicKeyInstructionIndex"),
        g.KB("messageDataOffset"),
        g.KB("messageDataSize"),
        g.KB("messageInstructionIndex"),
      ]);
      class rT {
        constructor() {}
        static createInstructionWithPublicKey(e) {
          let {
            publicKey: t,
            message: r,
            signature: n,
            instructionIndex: i,
          } = e;
          G(
            32 === t.length,
            `Public Key must be 32 bytes but received ${t.length} bytes`
          ),
            G(
              64 === n.length,
              `Signature must be 64 bytes but received ${n.length} bytes`
            );
          let a = rB.span,
            o = a + t.length,
            c = o + n.length,
            u = s.Buffer.alloc(c + r.length),
            l = null == i ? 65535 : i;
          return (
            rB.encode(
              {
                numSignatures: 1,
                padding: 0,
                signatureOffset: o,
                signatureInstructionIndex: l,
                publicKeyOffset: a,
                publicKeyInstructionIndex: l,
                messageDataOffset: c,
                messageDataSize: r.length,
                messageInstructionIndex: l,
              },
              u
            ),
            u.fill(t, a),
            u.fill(n, o),
            u.fill(r, c),
            new ea({ keys: [], programId: rT.programId, data: u })
          );
        }
        static createInstructionWithPrivateKey(e) {
          let { privateKey: t, message: r, instructionIndex: n } = e;
          G(
            64 === t.length,
            `Private key must be 64 bytes but received ${t.length} bytes`
          );
          try {
            let e = rS.fromSecretKey(t),
              i = e.publicKey.toBytes(),
              s = v(r, e.secretKey);
            return this.createInstructionWithPublicKey({
              publicKey: i,
              message: r,
              signature: s,
              instructionIndex: n,
            });
          } catch (e) {
            throw Error(`Error creating instruction; ${e}`);
          }
        }
      }
      rT.programId = new W("Ed25519SigVerify111111111111111111111111111");
      let rR = (e, t) => {
        let r = S.kA.sign(e, t);
        return [r.toCompactRawBytes(), r.recovery];
      };
      S.kA.utils.isValidPrivateKey;
      let rC = S.kA.getPublicKey,
        rx = g.n_([
          g.u8("numSignatures"),
          g.KB("signatureOffset"),
          g.u8("signatureInstructionIndex"),
          g.KB("ethAddressOffset"),
          g.u8("ethAddressInstructionIndex"),
          g.KB("messageDataOffset"),
          g.KB("messageDataSize"),
          g.u8("messageInstructionIndex"),
          g.Ik(20, "ethAddress"),
          g.Ik(64, "signature"),
          g.u8("recoveryId"),
        ]);
      class rL {
        constructor() {}
        static publicKeyToEthAddress(e) {
          G(
            64 === e.length,
            `Public key must be 64 bytes but received ${e.length} bytes`
          );
          try {
            return s.Buffer.from((0, w.fr)(B(e))).slice(-20);
          } catch (e) {
            throw Error(`Error constructing Ethereum address: ${e}`);
          }
        }
        static createInstructionWithPublicKey(e) {
          let {
            publicKey: t,
            message: r,
            signature: n,
            recoveryId: i,
            instructionIndex: s,
          } = e;
          return rL.createInstructionWithEthAddress({
            ethAddress: rL.publicKeyToEthAddress(t),
            message: r,
            signature: n,
            recoveryId: i,
            instructionIndex: s,
          });
        }
        static createInstructionWithEthAddress(e) {
          let t;
          let {
            ethAddress: r,
            message: n,
            signature: i,
            recoveryId: a,
            instructionIndex: o = 0,
          } = e;
          G(
            20 ===
              (t =
                "string" == typeof r
                  ? r.startsWith("0x")
                    ? s.Buffer.from(r.substr(2), "hex")
                    : s.Buffer.from(r, "hex")
                  : r).length,
            `Address must be 20 bytes but received ${t.length} bytes`
          );
          let c = 12 + t.length,
            u = c + i.length + 1,
            l = s.Buffer.alloc(rx.span + n.length);
          return (
            rx.encode(
              {
                numSignatures: 1,
                signatureOffset: c,
                signatureInstructionIndex: o,
                ethAddressOffset: 12,
                ethAddressInstructionIndex: o,
                messageDataOffset: u,
                messageDataSize: n.length,
                messageInstructionIndex: o,
                signature: B(i),
                ethAddress: B(t),
                recoveryId: a,
              },
              l
            ),
            l.fill(B(n), rx.span),
            new ea({ keys: [], programId: rL.programId, data: l })
          );
        }
        static createInstructionWithPrivateKey(e) {
          let { privateKey: t, message: r, instructionIndex: n } = e;
          G(
            32 === t.length,
            `Private key must be 32 bytes but received ${t.length} bytes`
          );
          try {
            let e = B(t),
              i = rC(e, !1).slice(1),
              a = s.Buffer.from((0, w.fr)(B(r))),
              [o, c] = rR(a, e);
            return this.createInstructionWithPublicKey({
              publicKey: i,
              message: r,
              signature: o,
              recoveryId: c,
              instructionIndex: n,
            });
          } catch (e) {
            throw Error(`Error creating instruction; ${e}`);
          }
        }
      }
      rL.programId = new W("KeccakSecp256k11111111111111111111111111111");
      let rO = new W("StakeConfig11111111111111111111111111111111");
      class rW {
        constructor(e, t) {
          (this.staker = void 0),
            (this.withdrawer = void 0),
            (this.staker = e),
            (this.withdrawer = t);
        }
      }
      class rK {
        constructor(e, t, r) {
          (this.unixTimestamp = void 0),
            (this.epoch = void 0),
            (this.custodian = void 0),
            (this.unixTimestamp = e),
            (this.epoch = t),
            (this.custodian = r);
        }
      }
      rK.default = new rK(0, 0, W.default);
      class rN {
        constructor() {}
        static decodeInstructionType(e) {
          let t;
          this.checkProgramId(e.programId);
          let r = g.Jq("instruction").decode(e.data);
          for (let [e, n] of Object.entries(rz))
            if (n.index == r) {
              t = e;
              break;
            }
          if (!t)
            throw Error("Instruction type incorrect; not a StakeInstruction");
          return t;
        }
        static decodeInitialize(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
          let { authorized: t, lockup: r } = eP(rz.Initialize, e.data);
          return {
            stakePubkey: e.keys[0].pubkey,
            authorized: new rW(new W(t.staker), new W(t.withdrawer)),
            lockup: new rK(r.unixTimestamp, r.epoch, new W(r.custodian)),
          };
        }
        static decodeDelegate(e) {
          return (
            this.checkProgramId(e.programId),
            this.checkKeyLength(e.keys, 6),
            eP(rz.Delegate, e.data),
            {
              stakePubkey: e.keys[0].pubkey,
              votePubkey: e.keys[1].pubkey,
              authorizedPubkey: e.keys[5].pubkey,
            }
          );
        }
        static decodeAuthorize(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
          let { newAuthorized: t, stakeAuthorizationType: r } = eP(
              rz.Authorize,
              e.data
            ),
            n = {
              stakePubkey: e.keys[0].pubkey,
              authorizedPubkey: e.keys[2].pubkey,
              newAuthorizedPubkey: new W(t),
              stakeAuthorizationType: { index: r },
            };
          return e.keys.length > 3 && (n.custodianPubkey = e.keys[3].pubkey), n;
        }
        static decodeAuthorizeWithSeed(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
          let {
              newAuthorized: t,
              stakeAuthorizationType: r,
              authoritySeed: n,
              authorityOwner: i,
            } = eP(rz.AuthorizeWithSeed, e.data),
            s = {
              stakePubkey: e.keys[0].pubkey,
              authorityBase: e.keys[1].pubkey,
              authoritySeed: n,
              authorityOwner: new W(i),
              newAuthorizedPubkey: new W(t),
              stakeAuthorizationType: { index: r },
            };
          return e.keys.length > 3 && (s.custodianPubkey = e.keys[3].pubkey), s;
        }
        static decodeSplit(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
          let { lamports: t } = eP(rz.Split, e.data);
          return {
            stakePubkey: e.keys[0].pubkey,
            splitStakePubkey: e.keys[1].pubkey,
            authorizedPubkey: e.keys[2].pubkey,
            lamports: t,
          };
        }
        static decodeMerge(e) {
          return (
            this.checkProgramId(e.programId),
            this.checkKeyLength(e.keys, 3),
            eP(rz.Merge, e.data),
            {
              stakePubkey: e.keys[0].pubkey,
              sourceStakePubKey: e.keys[1].pubkey,
              authorizedPubkey: e.keys[4].pubkey,
            }
          );
        }
        static decodeWithdraw(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 5);
          let { lamports: t } = eP(rz.Withdraw, e.data),
            r = {
              stakePubkey: e.keys[0].pubkey,
              toPubkey: e.keys[1].pubkey,
              authorizedPubkey: e.keys[4].pubkey,
              lamports: t,
            };
          return e.keys.length > 5 && (r.custodianPubkey = e.keys[5].pubkey), r;
        }
        static decodeDeactivate(e) {
          return (
            this.checkProgramId(e.programId),
            this.checkKeyLength(e.keys, 3),
            eP(rz.Deactivate, e.data),
            {
              stakePubkey: e.keys[0].pubkey,
              authorizedPubkey: e.keys[2].pubkey,
            }
          );
        }
        static checkProgramId(e) {
          if (!e.equals(rU.programId))
            throw Error("invalid instruction; programId is not StakeProgram");
        }
        static checkKeyLength(e, t) {
          if (e.length < t)
            throw Error(
              `invalid instruction; found ${e.length} keys, expected at least ${t}`
            );
        }
      }
      let rz = Object.freeze({
          Initialize: {
            index: 0,
            layout: g.n_([
              g.Jq("instruction"),
              ((e = "authorized") => g.n_([H("staker"), H("withdrawer")], e))(),
              ((e = "lockup") =>
                g.n_(
                  [g.gM("unixTimestamp"), g.gM("epoch"), H("custodian")],
                  e
                ))(),
            ]),
          },
          Authorize: {
            index: 1,
            layout: g.n_([
              g.Jq("instruction"),
              H("newAuthorized"),
              g.Jq("stakeAuthorizationType"),
            ]),
          },
          Delegate: { index: 2, layout: g.n_([g.Jq("instruction")]) },
          Split: {
            index: 3,
            layout: g.n_([g.Jq("instruction"), g.gM("lamports")]),
          },
          Withdraw: {
            index: 4,
            layout: g.n_([g.Jq("instruction"), g.gM("lamports")]),
          },
          Deactivate: { index: 5, layout: g.n_([g.Jq("instruction")]) },
          Merge: { index: 7, layout: g.n_([g.Jq("instruction")]) },
          AuthorizeWithSeed: {
            index: 8,
            layout: g.n_([
              g.Jq("instruction"),
              H("newAuthorized"),
              g.Jq("stakeAuthorizationType"),
              F("authoritySeed"),
              H("authorityOwner"),
            ]),
          },
        }),
        rq = Object.freeze({ Staker: { index: 0 }, Withdrawer: { index: 1 } });
      class rU {
        constructor() {}
        static initialize(e) {
          let { stakePubkey: t, authorized: r, lockup: n } = e,
            i = n || rK.default,
            s = eA(rz.Initialize, {
              authorized: {
                staker: B(r.staker.toBuffer()),
                withdrawer: B(r.withdrawer.toBuffer()),
              },
              lockup: {
                unixTimestamp: i.unixTimestamp,
                epoch: i.epoch,
                custodian: B(i.custodian.toBuffer()),
              },
            });
          return new ea({
            keys: [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: ep, isSigner: !1, isWritable: !1 },
            ],
            programId: this.programId,
            data: s,
          });
        }
        static createAccountWithSeed(e) {
          let t = new eo();
          t.add(
            eO.createAccountWithSeed({
              fromPubkey: e.fromPubkey,
              newAccountPubkey: e.stakePubkey,
              basePubkey: e.basePubkey,
              seed: e.seed,
              lamports: e.lamports,
              space: this.space,
              programId: this.programId,
            })
          );
          let { stakePubkey: r, authorized: n, lockup: i } = e;
          return t.add(
            this.initialize({ stakePubkey: r, authorized: n, lockup: i })
          );
        }
        static createAccount(e) {
          let t = new eo();
          t.add(
            eO.createAccount({
              fromPubkey: e.fromPubkey,
              newAccountPubkey: e.stakePubkey,
              lamports: e.lamports,
              space: this.space,
              programId: this.programId,
            })
          );
          let { stakePubkey: r, authorized: n, lockup: i } = e;
          return t.add(
            this.initialize({ stakePubkey: r, authorized: n, lockup: i })
          );
        }
        static delegate(e) {
          let { stakePubkey: t, authorizedPubkey: r, votePubkey: n } = e,
            i = eA(rz.Delegate);
          return new eo().add({
            keys: [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: n, isSigner: !1, isWritable: !1 },
              { pubkey: el, isSigner: !1, isWritable: !1 },
              { pubkey: ef, isSigner: !1, isWritable: !1 },
              { pubkey: rO, isSigner: !1, isWritable: !1 },
              { pubkey: r, isSigner: !0, isWritable: !1 },
            ],
            programId: this.programId,
            data: i,
          });
        }
        static authorize(e) {
          let {
              stakePubkey: t,
              authorizedPubkey: r,
              newAuthorizedPubkey: n,
              stakeAuthorizationType: i,
              custodianPubkey: s,
            } = e,
            a = eA(rz.Authorize, {
              newAuthorized: B(n.toBuffer()),
              stakeAuthorizationType: i.index,
            }),
            o = [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: el, isSigner: !1, isWritable: !0 },
              { pubkey: r, isSigner: !0, isWritable: !1 },
            ];
          return (
            s && o.push({ pubkey: s, isSigner: !0, isWritable: !1 }),
            new eo().add({ keys: o, programId: this.programId, data: a })
          );
        }
        static authorizeWithSeed(e) {
          let {
              stakePubkey: t,
              authorityBase: r,
              authoritySeed: n,
              authorityOwner: i,
              newAuthorizedPubkey: s,
              stakeAuthorizationType: a,
              custodianPubkey: o,
            } = e,
            c = eA(rz.AuthorizeWithSeed, {
              newAuthorized: B(s.toBuffer()),
              stakeAuthorizationType: a.index,
              authoritySeed: n,
              authorityOwner: B(i.toBuffer()),
            }),
            u = [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: r, isSigner: !0, isWritable: !1 },
              { pubkey: el, isSigner: !1, isWritable: !1 },
            ];
          return (
            o && u.push({ pubkey: o, isSigner: !0, isWritable: !1 }),
            new eo().add({ keys: u, programId: this.programId, data: c })
          );
        }
        static splitInstruction(e) {
          let {
              stakePubkey: t,
              authorizedPubkey: r,
              splitStakePubkey: n,
              lamports: i,
            } = e,
            s = eA(rz.Split, { lamports: i });
          return new ea({
            keys: [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: n, isSigner: !1, isWritable: !0 },
              { pubkey: r, isSigner: !0, isWritable: !1 },
            ],
            programId: this.programId,
            data: s,
          });
        }
        static split(e, t) {
          let r = new eo();
          return (
            r.add(
              eO.createAccount({
                fromPubkey: e.authorizedPubkey,
                newAccountPubkey: e.splitStakePubkey,
                lamports: t,
                space: this.space,
                programId: this.programId,
              })
            ),
            r.add(this.splitInstruction(e))
          );
        }
        static splitWithSeed(e, t) {
          let {
              stakePubkey: r,
              authorizedPubkey: n,
              splitStakePubkey: i,
              basePubkey: s,
              seed: a,
              lamports: o,
            } = e,
            c = new eo();
          return (
            c.add(
              eO.allocate({
                accountPubkey: i,
                basePubkey: s,
                seed: a,
                space: this.space,
                programId: this.programId,
              })
            ),
            t &&
              t > 0 &&
              c.add(
                eO.transfer({
                  fromPubkey: e.authorizedPubkey,
                  toPubkey: i,
                  lamports: t,
                })
              ),
            c.add(
              this.splitInstruction({
                stakePubkey: r,
                authorizedPubkey: n,
                splitStakePubkey: i,
                lamports: o,
              })
            )
          );
        }
        static merge(e) {
          let { stakePubkey: t, sourceStakePubKey: r, authorizedPubkey: n } = e,
            i = eA(rz.Merge);
          return new eo().add({
            keys: [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: r, isSigner: !1, isWritable: !0 },
              { pubkey: el, isSigner: !1, isWritable: !1 },
              { pubkey: ef, isSigner: !1, isWritable: !1 },
              { pubkey: n, isSigner: !0, isWritable: !1 },
            ],
            programId: this.programId,
            data: i,
          });
        }
        static withdraw(e) {
          let {
              stakePubkey: t,
              authorizedPubkey: r,
              toPubkey: n,
              lamports: i,
              custodianPubkey: s,
            } = e,
            a = eA(rz.Withdraw, { lamports: i }),
            o = [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: n, isSigner: !1, isWritable: !0 },
              { pubkey: el, isSigner: !1, isWritable: !1 },
              { pubkey: ef, isSigner: !1, isWritable: !1 },
              { pubkey: r, isSigner: !0, isWritable: !1 },
            ];
          return (
            s && o.push({ pubkey: s, isSigner: !0, isWritable: !1 }),
            new eo().add({ keys: o, programId: this.programId, data: a })
          );
        }
        static deactivate(e) {
          let { stakePubkey: t, authorizedPubkey: r } = e,
            n = eA(rz.Deactivate);
          return new eo().add({
            keys: [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: el, isSigner: !1, isWritable: !1 },
              { pubkey: r, isSigner: !0, isWritable: !1 },
            ],
            programId: this.programId,
            data: n,
          });
        }
      }
      (rU.programId = new W("Stake11111111111111111111111111111111111111")),
        (rU.space = 200);
      class rM {
        constructor(e, t, r, n) {
          (this.nodePubkey = void 0),
            (this.authorizedVoter = void 0),
            (this.authorizedWithdrawer = void 0),
            (this.commission = void 0),
            (this.nodePubkey = e),
            (this.authorizedVoter = t),
            (this.authorizedWithdrawer = r),
            (this.commission = n);
        }
      }
      class rJ {
        constructor() {}
        static decodeInstructionType(e) {
          let t;
          this.checkProgramId(e.programId);
          let r = g.Jq("instruction").decode(e.data);
          for (let [e, n] of Object.entries(rV))
            if (n.index == r) {
              t = e;
              break;
            }
          if (!t)
            throw Error("Instruction type incorrect; not a VoteInstruction");
          return t;
        }
        static decodeInitializeAccount(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 4);
          let { voteInit: t } = eP(rV.InitializeAccount, e.data);
          return {
            votePubkey: e.keys[0].pubkey,
            nodePubkey: e.keys[3].pubkey,
            voteInit: new rM(
              new W(t.nodePubkey),
              new W(t.authorizedVoter),
              new W(t.authorizedWithdrawer),
              t.commission
            ),
          };
        }
        static decodeAuthorize(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
          let { newAuthorized: t, voteAuthorizationType: r } = eP(
            rV.Authorize,
            e.data
          );
          return {
            votePubkey: e.keys[0].pubkey,
            authorizedPubkey: e.keys[2].pubkey,
            newAuthorizedPubkey: new W(t),
            voteAuthorizationType: { index: r },
          };
        }
        static decodeAuthorizeWithSeed(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
          let {
            voteAuthorizeWithSeedArgs: {
              currentAuthorityDerivedKeyOwnerPubkey: t,
              currentAuthorityDerivedKeySeed: r,
              newAuthorized: n,
              voteAuthorizationType: i,
            },
          } = eP(rV.AuthorizeWithSeed, e.data);
          return {
            currentAuthorityDerivedKeyBasePubkey: e.keys[2].pubkey,
            currentAuthorityDerivedKeyOwnerPubkey: new W(t),
            currentAuthorityDerivedKeySeed: r,
            newAuthorizedPubkey: new W(n),
            voteAuthorizationType: { index: i },
            votePubkey: e.keys[0].pubkey,
          };
        }
        static decodeWithdraw(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
          let { lamports: t } = eP(rV.Withdraw, e.data);
          return {
            votePubkey: e.keys[0].pubkey,
            authorizedWithdrawerPubkey: e.keys[2].pubkey,
            lamports: t,
            toPubkey: e.keys[1].pubkey,
          };
        }
        static checkProgramId(e) {
          if (!e.equals(rH.programId))
            throw Error("invalid instruction; programId is not VoteProgram");
        }
        static checkKeyLength(e, t) {
          if (e.length < t)
            throw Error(
              `invalid instruction; found ${e.length} keys, expected at least ${t}`
            );
        }
      }
      let rV = Object.freeze({
          InitializeAccount: {
            index: 0,
            layout: g.n_([
              g.Jq("instruction"),
              ((e = "voteInit") =>
                g.n_(
                  [
                    H("nodePubkey"),
                    H("authorizedVoter"),
                    H("authorizedWithdrawer"),
                    g.u8("commission"),
                  ],
                  e
                ))(),
            ]),
          },
          Authorize: {
            index: 1,
            layout: g.n_([
              g.Jq("instruction"),
              H("newAuthorized"),
              g.Jq("voteAuthorizationType"),
            ]),
          },
          Withdraw: {
            index: 3,
            layout: g.n_([g.Jq("instruction"), g.gM("lamports")]),
          },
          UpdateValidatorIdentity: {
            index: 4,
            layout: g.n_([g.Jq("instruction")]),
          },
          AuthorizeWithSeed: {
            index: 10,
            layout: g.n_([
              g.Jq("instruction"),
              ((e = "voteAuthorizeWithSeedArgs") =>
                g.n_(
                  [
                    g.Jq("voteAuthorizationType"),
                    H("currentAuthorityDerivedKeyOwnerPubkey"),
                    F("currentAuthorityDerivedKeySeed"),
                    H("newAuthorized"),
                  ],
                  e
                ))(),
            ]),
          },
        }),
        rD = Object.freeze({ Voter: { index: 0 }, Withdrawer: { index: 1 } });
      class rH {
        constructor() {}
        static initializeAccount(e) {
          let { votePubkey: t, nodePubkey: r, voteInit: n } = e,
            i = eA(rV.InitializeAccount, {
              voteInit: {
                nodePubkey: B(n.nodePubkey.toBuffer()),
                authorizedVoter: B(n.authorizedVoter.toBuffer()),
                authorizedWithdrawer: B(n.authorizedWithdrawer.toBuffer()),
                commission: n.commission,
              },
            });
          return new ea({
            keys: [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: ep, isSigner: !1, isWritable: !1 },
              { pubkey: el, isSigner: !1, isWritable: !1 },
              { pubkey: r, isSigner: !0, isWritable: !1 },
            ],
            programId: this.programId,
            data: i,
          });
        }
        static createAccount(e) {
          let t = new eo();
          return (
            t.add(
              eO.createAccount({
                fromPubkey: e.fromPubkey,
                newAccountPubkey: e.votePubkey,
                lamports: e.lamports,
                space: this.space,
                programId: this.programId,
              })
            ),
            t.add(
              this.initializeAccount({
                votePubkey: e.votePubkey,
                nodePubkey: e.voteInit.nodePubkey,
                voteInit: e.voteInit,
              })
            )
          );
        }
        static authorize(e) {
          let {
              votePubkey: t,
              authorizedPubkey: r,
              newAuthorizedPubkey: n,
              voteAuthorizationType: i,
            } = e,
            s = eA(rV.Authorize, {
              newAuthorized: B(n.toBuffer()),
              voteAuthorizationType: i.index,
            });
          return new eo().add({
            keys: [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: el, isSigner: !1, isWritable: !1 },
              { pubkey: r, isSigner: !0, isWritable: !1 },
            ],
            programId: this.programId,
            data: s,
          });
        }
        static authorizeWithSeed(e) {
          let {
              currentAuthorityDerivedKeyBasePubkey: t,
              currentAuthorityDerivedKeyOwnerPubkey: r,
              currentAuthorityDerivedKeySeed: n,
              newAuthorizedPubkey: i,
              voteAuthorizationType: s,
              votePubkey: a,
            } = e,
            o = eA(rV.AuthorizeWithSeed, {
              voteAuthorizeWithSeedArgs: {
                currentAuthorityDerivedKeyOwnerPubkey: B(r.toBuffer()),
                currentAuthorityDerivedKeySeed: n,
                newAuthorized: B(i.toBuffer()),
                voteAuthorizationType: s.index,
              },
            });
          return new eo().add({
            keys: [
              { pubkey: a, isSigner: !1, isWritable: !0 },
              { pubkey: el, isSigner: !1, isWritable: !1 },
              { pubkey: t, isSigner: !0, isWritable: !1 },
            ],
            programId: this.programId,
            data: o,
          });
        }
        static withdraw(e) {
          let {
              votePubkey: t,
              authorizedWithdrawerPubkey: r,
              lamports: n,
              toPubkey: i,
            } = e,
            s = eA(rV.Withdraw, { lamports: n });
          return new eo().add({
            keys: [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: i, isSigner: !1, isWritable: !0 },
              { pubkey: r, isSigner: !0, isWritable: !1 },
            ],
            programId: this.programId,
            data: s,
          });
        }
        static safeWithdraw(e, t, r) {
          if (e.lamports > t - r)
            throw Error(
              "Withdraw will leave vote account with insufficient funds."
            );
          return rH.withdraw(e);
        }
        static updateValidatorIdentity(e) {
          let {
              votePubkey: t,
              authorizedWithdrawerPubkey: r,
              nodePubkey: n,
            } = e,
            i = eA(rV.UpdateValidatorIdentity);
          return new eo().add({
            keys: [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: n, isSigner: !0, isWritable: !1 },
              { pubkey: r, isSigner: !0, isWritable: !1 },
            ],
            programId: this.programId,
            data: i,
          });
        }
      }
      (rH.programId = new W("Vote111111111111111111111111111111111111111")),
        (rH.space = 3762);
      let r$ = new W("Va1idator1nfo111111111111111111111111111111"),
        rF = (0, y.type)({
          name: (0, y.string)(),
          website: (0, y.optional)((0, y.string)()),
          details: (0, y.optional)((0, y.string)()),
          keybaseUsername: (0, y.optional)((0, y.string)()),
        });
      class rj {
        constructor(e, t) {
          (this.key = void 0),
            (this.info = void 0),
            (this.key = e),
            (this.info = t);
        }
        static fromConfigData(e) {
          let t = [...e];
          if (2 !== j(t)) return null;
          let r = [];
          for (let e = 0; e < 2; e++) {
            let e = new W(ee(t, 0, L)),
              n = 1 === Q(t);
            r.push({ publicKey: e, isSigner: n });
          }
          if (r[0].publicKey.equals(r$) && r[1].isSigner) {
            let e = JSON.parse(F().decode(s.Buffer.from(t)));
            return (0, y.assert)(e, rF), new rj(r[1].publicKey, e);
          }
          return null;
        }
      }
      let rY = new W("Vote111111111111111111111111111111111111111"),
        rG = g.n_([
          H("nodePubkey"),
          H("authorizedWithdrawer"),
          g.u8("commission"),
          g._O(),
          g.A9(
            g.n_([g._O("slot"), g.Jq("confirmationCount")]),
            g.cv(g.Jq(), -8),
            "votes"
          ),
          g.u8("rootSlotValid"),
          g._O("rootSlot"),
          g._O(),
          g.A9(
            g.n_([g._O("epoch"), H("authorizedVoter")]),
            g.cv(g.Jq(), -8),
            "authorizedVoters"
          ),
          g.n_(
            [
              g.A9(
                g.n_([
                  H("authorizedPubkey"),
                  g._O("epochOfLastAuthorizedSwitch"),
                  g._O("targetEpoch"),
                ]),
                32,
                "buf"
              ),
              g._O("idx"),
              g.u8("isEmpty"),
            ],
            "priorVoters"
          ),
          g._O(),
          g.A9(
            g.n_([g._O("epoch"), g._O("credits"), g._O("prevCredits")]),
            g.cv(g.Jq(), -8),
            "epochCredits"
          ),
          g.n_([g._O("slot"), g._O("timestamp")], "lastTimestamp"),
        ]);
      class rX {
        constructor(e) {
          (this.nodePubkey = void 0),
            (this.authorizedWithdrawer = void 0),
            (this.commission = void 0),
            (this.rootSlot = void 0),
            (this.votes = void 0),
            (this.authorizedVoters = void 0),
            (this.priorVoters = void 0),
            (this.epochCredits = void 0),
            (this.lastTimestamp = void 0),
            (this.nodePubkey = e.nodePubkey),
            (this.authorizedWithdrawer = e.authorizedWithdrawer),
            (this.commission = e.commission),
            (this.rootSlot = e.rootSlot),
            (this.votes = e.votes),
            (this.authorizedVoters = e.authorizedVoters),
            (this.priorVoters = e.priorVoters),
            (this.epochCredits = e.epochCredits),
            (this.lastTimestamp = e.lastTimestamp);
        }
        static fromAccountData(e) {
          let t = rG.decode(B(e), 4),
            r = t.rootSlot;
          return (
            t.rootSlotValid || (r = null),
            new rX({
              nodePubkey: new W(t.nodePubkey),
              authorizedWithdrawer: new W(t.authorizedWithdrawer),
              commission: t.commission,
              votes: t.votes,
              rootSlot: r,
              authorizedVoters: t.authorizedVoters.map(rZ),
              priorVoters: (function ({ buf: e, idx: t, isEmpty: r }) {
                return r
                  ? []
                  : [...e.slice(t + 1).map(rQ), ...e.slice(0, t).map(rQ)];
              })(t.priorVoters),
              epochCredits: t.epochCredits,
              lastTimestamp: t.lastTimestamp,
            })
          );
        }
      }
      function rZ({ authorizedVoter: e, epoch: t }) {
        return { epoch: t, authorizedVoter: new W(e) };
      }
      function rQ({
        authorizedPubkey: e,
        epochOfLastAuthorizedSwitch: t,
        targetEpoch: r,
      }) {
        return {
          authorizedPubkey: new W(e),
          epochOfLastAuthorizedSwitch: t,
          targetEpoch: r,
        };
      }
      let r0 = {
        http: {
          devnet: "http://api.devnet.solana.com",
          testnet: "http://api.testnet.solana.com",
          "mainnet-beta": "http://api.mainnet-beta.solana.com/",
        },
        https: {
          devnet: "https://api.devnet.solana.com",
          testnet: "https://api.testnet.solana.com",
          "mainnet-beta": "https://api.mainnet-beta.solana.com/",
        },
      };
      function r1(e, t) {
        let r = !1 === t ? "http" : "https";
        if (!e) return r0[r].devnet;
        let n = r0[r][e];
        if (!n) throw Error(`Unknown ${r} cluster: ${e}`);
        return n;
      }
      async function r8(e, t, r, n) {
        let i, s;
        r && Object.prototype.hasOwnProperty.call(r, "lastValidBlockHeight")
          ? ((i = r), (s = n))
          : r && Object.prototype.hasOwnProperty.call(r, "nonceValue")
          ? ((i = r), (s = n))
          : (s = r);
        let a = s && {
            skipPreflight: s.skipPreflight,
            preflightCommitment: s.preflightCommitment || s.commitment,
            minContextSlot: s.minContextSlot,
          },
          o = await e.sendRawTransaction(t, a),
          c = s && s.commitment,
          u = i ? e.confirmTransaction(i, c) : e.confirmTransaction(o, c),
          l = (await u).value;
        if (l.err) {
          if (null != o)
            throw new ek({
              action: a?.skipPreflight ? "send" : "simulate",
              signature: o,
              transactionMessage: `Status: (${JSON.stringify(l)})`,
            });
          throw Error(`Raw transaction ${o} failed (${JSON.stringify(l)})`);
        }
        return o;
      }
      let r2 = 1e9;
    },
  },
]);
