try {
  (() => {
    var o = __REACT__,
      {
        Children: Lt,
        Component: Ut,
        Fragment: jt,
        Profiler: Mt,
        PureComponent: Nt,
        StrictMode: Ht,
        Suspense: Ft,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Gt,
        act: $t,
        cloneElement: zt,
        createContext: Wt,
        createElement: Kt,
        createFactory: Yt,
        createRef: Vt,
        forwardRef: Zt,
        isValidElement: qt,
        lazy: Jt,
        memo: Qt,
        startTransition: Xt,
        unstable_act: eo,
        useCallback: L,
        useContext: V,
        useDebugValue: to,
        useDeferredValue: oo,
        useEffect: U,
        useId: no,
        useImperativeHandle: ro,
        useInsertionEffect: ao,
        useLayoutEffect: lo,
        useMemo: Z,
        useReducer: co,
        useRef: q,
        useState: R,
        useSyncExternalStore: so,
        useTransition: io,
        version: uo,
      } = __REACT__;
    var ho = __STORYBOOK_TYPES__,
      { Addon_TypesEnum: J } = __STORYBOOK_TYPES__;
    var So = __STORYBOOK_API__,
      {
        ActiveTabs: Eo,
        Consumer: To,
        ManagerContext: _o,
        Provider: Co,
        RequestResponseError: Ao,
        addons: k,
        combineParameters: wo,
        controlOrMetaKey: Oo,
        controlOrMetaSymbol: Ro,
        eventMatchesShortcut: ko,
        eventToShortcut: xo,
        experimental_MockUniversalStore: Po,
        experimental_UniversalStore: Q,
        experimental_getStatusStore: j,
        experimental_getTestProviderStore: X,
        experimental_requestResponse: Bo,
        experimental_useStatusStore: M,
        experimental_useTestProviderStore: ee,
        experimental_useUniversalStore: te,
        internal_fullStatusStore: Do,
        internal_fullTestProviderStore: Lo,
        internal_universalStatusStore: Uo,
        internal_universalTestProviderStore: jo,
        isMacLike: Mo,
        isShortcutTaken: No,
        keyToSymbol: Ho,
        merge: Fo,
        mockChannel: Go,
        optionOrAltSymbol: $o,
        shortcutMatchesShortcut: zo,
        shortcutToHumanString: Wo,
        types: Ko,
        useAddonState: Yo,
        useArgTypes: Vo,
        useArgs: Zo,
        useChannel: qo,
        useGlobalTypes: Jo,
        useGlobals: Qo,
        useParameter: Xo,
        useSharedState: en,
        useStoryPrepared: tn,
        useStorybookApi: oe,
        useStorybookState: on,
      } = __STORYBOOK_API__;
    var cn = __STORYBOOK_COMPONENTS__,
      {
        A: sn,
        ActionBar: un,
        AddonPanel: dn,
        Badge: mn,
        Bar: gn,
        Blockquote: In,
        Button: N,
        ClipboardCode: pn,
        Code: hn,
        DL: fn,
        Div: bn,
        DocumentWrapper: vn,
        EmptyTabContent: yn,
        ErrorFormatter: Sn,
        FlexBar: En,
        Form: x,
        H1: Tn,
        H2: _n,
        H3: Cn,
        H4: An,
        H5: wn,
        H6: On,
        HR: Rn,
        IconButton: f,
        Img: kn,
        LI: xn,
        Link: H,
        ListItem: P,
        Loader: Pn,
        Modal: F,
        OL: Bn,
        P: Dn,
        Placeholder: Ln,
        Pre: Un,
        ProgressSpinner: ne,
        ResetWrapper: jn,
        ScrollArea: Mn,
        Separator: Nn,
        Spaced: Hn,
        Span: Fn,
        StorybookIcon: Gn,
        StorybookLogo: $n,
        SyntaxHighlighter: zn,
        TT: Wn,
        TabBar: Kn,
        TabButton: Yn,
        TabWrapper: Vn,
        Table: Zn,
        Tabs: qn,
        TabsState: Jn,
        TooltipLinkList: Qn,
        TooltipMessage: Xn,
        TooltipNote: E,
        UL: er,
        WithTooltip: T,
        WithTooltipPure: tr,
        Zoom: or,
        codeCommon: nr,
        components: rr,
        createCopyToClipboardFunction: ar,
        getStoryHref: lr,
        interleaveSeparators: cr,
        nameSpaceClassNames: sr,
        resetComponents: ir,
        withReset: ur,
      } = __STORYBOOK_COMPONENTS__;
    var pr = __STORYBOOK_ICONS__,
      {
        AccessibilityAltIcon: hr,
        AccessibilityIcon: fr,
        AccessibilityIgnoredIcon: br,
        AddIcon: vr,
        AdminIcon: yr,
        AlertAltIcon: Sr,
        AlertIcon: Er,
        AlignLeftIcon: Tr,
        AlignRightIcon: _r,
        AppleIcon: Cr,
        ArrowBottomLeftIcon: Ar,
        ArrowBottomRightIcon: wr,
        ArrowDownIcon: Or,
        ArrowLeftIcon: Rr,
        ArrowRightIcon: kr,
        ArrowSolidDownIcon: xr,
        ArrowSolidLeftIcon: Pr,
        ArrowSolidRightIcon: Br,
        ArrowSolidUpIcon: Dr,
        ArrowTopLeftIcon: Lr,
        ArrowTopRightIcon: Ur,
        ArrowUpIcon: jr,
        AzureDevOpsIcon: Mr,
        BackIcon: Nr,
        BasketIcon: Hr,
        BatchAcceptIcon: Fr,
        BatchDenyIcon: Gr,
        BeakerIcon: $r,
        BellIcon: zr,
        BitbucketIcon: Wr,
        BoldIcon: Kr,
        BookIcon: Yr,
        BookmarkHollowIcon: Vr,
        BookmarkIcon: Zr,
        BottomBarIcon: qr,
        BottomBarToggleIcon: Jr,
        BoxIcon: Qr,
        BranchIcon: Xr,
        BrowserIcon: ea,
        ButtonIcon: ta,
        CPUIcon: oa,
        CalendarIcon: na,
        CameraIcon: ra,
        CameraStabilizeIcon: aa,
        CategoryIcon: la,
        CertificateIcon: ca,
        ChangedIcon: sa,
        ChatIcon: ia,
        CheckIcon: ua,
        ChevronDownIcon: da,
        ChevronLeftIcon: ma,
        ChevronRightIcon: ga,
        ChevronSmallDownIcon: Ia,
        ChevronSmallLeftIcon: pa,
        ChevronSmallRightIcon: ha,
        ChevronSmallUpIcon: fa,
        ChevronUpIcon: ba,
        ChromaticIcon: va,
        ChromeIcon: ya,
        CircleHollowIcon: Sa,
        CircleIcon: Ea,
        ClearIcon: Ta,
        CloseAltIcon: _a,
        CloseIcon: re,
        CloudHollowIcon: Ca,
        CloudIcon: Aa,
        CogIcon: wa,
        CollapseIcon: Oa,
        CommandIcon: Ra,
        CommentAddIcon: ka,
        CommentIcon: xa,
        CommentsIcon: Pa,
        CommitIcon: Ba,
        CompassIcon: Da,
        ComponentDrivenIcon: La,
        ComponentIcon: Ua,
        ContrastIcon: ja,
        ContrastIgnoredIcon: Ma,
        ControlsIcon: Na,
        CopyIcon: Ha,
        CreditIcon: Fa,
        CrossIcon: Ga,
        DashboardIcon: $a,
        DatabaseIcon: za,
        DeleteIcon: Wa,
        DiamondIcon: Ka,
        DirectionIcon: Ya,
        DiscordIcon: Va,
        DocChartIcon: Za,
        DocListIcon: qa,
        DocumentIcon: Ja,
        DownloadIcon: Qa,
        DragIcon: Xa,
        EditIcon: el,
        EllipsisIcon: tl,
        EmailIcon: ol,
        ExpandAltIcon: nl,
        ExpandIcon: rl,
        EyeCloseIcon: al,
        EyeIcon: ae,
        FaceHappyIcon: ll,
        FaceNeutralIcon: cl,
        FaceSadIcon: sl,
        FacebookIcon: il,
        FailedIcon: ul,
        FastForwardIcon: dl,
        FigmaIcon: ml,
        FilterIcon: gl,
        FlagIcon: Il,
        FolderIcon: pl,
        FormIcon: hl,
        GDriveIcon: fl,
        GithubIcon: bl,
        GitlabIcon: vl,
        GlobeIcon: yl,
        GoogleIcon: Sl,
        GraphBarIcon: El,
        GraphLineIcon: Tl,
        GraphqlIcon: _l,
        GridAltIcon: Cl,
        GridIcon: Al,
        GrowIcon: wl,
        HeartHollowIcon: Ol,
        HeartIcon: Rl,
        HomeIcon: kl,
        HourglassIcon: xl,
        InfoIcon: le,
        ItalicIcon: Pl,
        JumpToIcon: Bl,
        KeyIcon: Dl,
        LightningIcon: Ll,
        LightningOffIcon: Ul,
        LinkBrokenIcon: jl,
        LinkIcon: Ml,
        LinkedinIcon: Nl,
        LinuxIcon: Hl,
        ListOrderedIcon: Fl,
        ListUnorderedIcon: Gl,
        LocationIcon: $l,
        LockIcon: zl,
        MarkdownIcon: Wl,
        MarkupIcon: Kl,
        MediumIcon: Yl,
        MemoryIcon: Vl,
        MenuIcon: Zl,
        MergeIcon: ql,
        MirrorIcon: Jl,
        MobileIcon: Ql,
        MoonIcon: Xl,
        NutIcon: ec,
        OutboxIcon: tc,
        OutlineIcon: oc,
        PaintBrushIcon: nc,
        PaperClipIcon: rc,
        ParagraphIcon: ac,
        PassedIcon: lc,
        PhoneIcon: cc,
        PhotoDragIcon: sc,
        PhotoIcon: ic,
        PhotoStabilizeIcon: uc,
        PinAltIcon: dc,
        PinIcon: mc,
        PlayAllHollowIcon: gc,
        PlayBackIcon: Ic,
        PlayHollowIcon: ce,
        PlayIcon: pc,
        PlayNextIcon: hc,
        PlusIcon: fc,
        PointerDefaultIcon: bc,
        PointerHandIcon: vc,
        PowerIcon: yc,
        PrintIcon: Sc,
        ProceedIcon: Ec,
        ProfileIcon: Tc,
        PullRequestIcon: _c,
        QuestionIcon: Cc,
        RSSIcon: Ac,
        RedirectIcon: wc,
        ReduxIcon: Oc,
        RefreshIcon: Rc,
        ReplyIcon: kc,
        RepoIcon: xc,
        RequestChangeIcon: Pc,
        RewindIcon: Bc,
        RulerIcon: Dc,
        SaveIcon: Lc,
        SearchIcon: Uc,
        ShareAltIcon: jc,
        ShareIcon: Mc,
        ShieldIcon: Nc,
        SideBySideIcon: Hc,
        SidebarAltIcon: Fc,
        SidebarAltToggleIcon: Gc,
        SidebarIcon: $c,
        SidebarToggleIcon: zc,
        SpeakerIcon: Wc,
        StackedIcon: Kc,
        StarHollowIcon: Yc,
        StarIcon: Vc,
        StatusFailIcon: Zc,
        StatusIcon: qc,
        StatusPassIcon: Jc,
        StatusWarnIcon: Qc,
        StickerIcon: Xc,
        StopAltHollowIcon: es,
        StopAltIcon: se,
        StopIcon: ts,
        StorybookIcon: os,
        StructureIcon: ns,
        SubtractIcon: rs,
        SunIcon: as,
        SupportIcon: ls,
        SweepIcon: cs,
        SwitchAltIcon: ss,
        SyncIcon: ie,
        TabletIcon: is,
        ThumbsUpIcon: us,
        TimeIcon: ds,
        TimerIcon: ms,
        TransferIcon: gs,
        TrashIcon: Is,
        TwitterIcon: ps,
        TypeIcon: hs,
        UbuntuIcon: fs,
        UndoIcon: bs,
        UnfoldIcon: vs,
        UnlockIcon: ys,
        UnpinIcon: Ss,
        UploadIcon: Es,
        UserAddIcon: Ts,
        UserAltIcon: _s,
        UserIcon: Cs,
        UsersIcon: As,
        VSCodeIcon: ws,
        VerifiedIcon: Os,
        VideoIcon: Rs,
        WandIcon: ks,
        WatchIcon: xs,
        WindowsIcon: Ps,
        WrenchIcon: Bs,
        XIcon: Ds,
        YoutubeIcon: Ls,
        ZoomIcon: Us,
        ZoomOutIcon: js,
        ZoomResetIcon: Ms,
        iconList: Ns,
      } = __STORYBOOK_ICONS__;
    var zs = __STORYBOOK_THEMING__,
      {
        CacheProvider: Ws,
        ClassNames: Ks,
        Global: Ys,
        ThemeProvider: Vs,
        background: Zs,
        color: qs,
        convert: Js,
        create: Qs,
        createCache: Xs,
        createGlobal: ei,
        createReset: ti,
        css: oi,
        darken: ni,
        ensure: ri,
        ignoreSsrWarning: ai,
        isPropValid: li,
        jsx: ci,
        keyframes: si,
        lighten: ii,
        styled: I,
        themes: ui,
        typography: di,
        useTheme: mi,
        withTheme: gi,
      } = __STORYBOOK_THEMING__;
    var Re = 'storybook/interactions',
      be = `${Re}/panel`,
      ve = 'storybook/a11y',
      ye = `${ve}/panel`,
      O = 'storybook/test',
      ke = `${O}/test-provider`,
      xe = 'writing-tests/integrations/vitest-addon',
      Pe = `${xe}#what-happens-if-vitest-itself-has-an-error`,
      Be = {
        id: O,
        initialState: {
          config: { coverage: !1, a11y: !1 },
          watching: !1,
          cancelling: !1,
          fatalError: void 0,
          indexUrl: void 0,
          previewAnnotations: [],
          currentRun: {
            triggeredBy: void 0,
            config: { coverage: !1, a11y: !1 },
            componentTestCount: { success: 0, error: 0 },
            a11yCount: { success: 0, warning: 0, error: 0 },
            storyIds: void 0,
            totalTestCount: void 0,
            startedAt: void 0,
            finishedAt: void 0,
            unhandledErrors: [],
            coverageSummary: void 0,
          },
        },
      },
      ue = ['global', 'run-all'],
      Se = 'storybook/component-test',
      Ee = 'storybook/a11y',
      b = Q.create({ ...Be, leader: globalThis.CONFIG_TYPE === 'PRODUCTION' }),
      De = j(Se),
      Le = j(Ee),
      Te = X(O),
      Ue = I.div({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '6px 6px 6px 20px',
      }),
      je = I.div({ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }),
      Me = I(F.Title)(({ theme: { typography: e } }) => ({
        fontSize: e.size.s2,
        fontWeight: e.weight.bold,
      })),
      Ne = I.pre(({ theme: e }) => ({
        whiteSpace: 'pre-wrap',
        wordWrap: 'break-word',
        overflow: 'auto',
        maxHeight: '60vh',
        margin: 0,
        padding: '20px',
        fontFamily: e.typography.fonts.mono,
        fontSize: '12px',
        borderTop: `1px solid ${e.appBorderColor}`,
        borderRadius: 0,
      })),
      He = I.a(({ theme: e }) => ({ color: e.color.defaultText })),
      W = o.createContext({ isModalOpen: !1, setModalOpen: void 0 });
    function z({ error: e }) {
      return e
        ? o.createElement(
            'div',
            null,
            o.createElement('h4', null, 'Caused by: ', e.name || 'Error', ': ', e.message),
            e.stack && o.createElement('pre', null, e.stack),
            e.cause && o.createElement(z, { error: e.cause })
          )
        : null;
    }
    function Fe({ onRerun: e, storeState: t }) {
      let n = oe(),
        { isModalOpen: c, setModalOpen: u } = V(W),
        r = () => u?.(!1),
        l = n.getDocsUrl({ subpath: Pe, versioned: !0, renderer: !0 }),
        {
          fatalError: i,
          currentRun: { unhandledErrors: s },
        } = t,
        g = i
          ? o.createElement(
              o.Fragment,
              null,
              o.createElement('p', null, i.error.name || 'Error'),
              i.message && o.createElement('p', null, i.message),
              i.error.message && o.createElement('p', null, i.error.message),
              i.error.stack && o.createElement('p', null, i.error.stack),
              i.error.cause && o.createElement(z, { error: i.error.cause })
            )
          : s.length > 0
            ? o.createElement(
                'ol',
                null,
                s.map((a) =>
                  o.createElement(
                    'li',
                    { key: a.name + a.message },
                    o.createElement('p', null, a.name, ': ', a.message),
                    a.VITEST_TEST_PATH &&
                      o.createElement(
                        'p',
                        null,
                        'This error originated in "',
                        o.createElement('b', null, a.VITEST_TEST_PATH),
                        `". It doesn't mean the error was thrown inside the file itself, but while it was running.`
                      ),
                    a.VITEST_TEST_NAME &&
                      o.createElement(
                        o.Fragment,
                        null,
                        o.createElement(
                          'p',
                          null,
                          `The latest test that might've caused the error is "`,
                          o.createElement('b', null, a.VITEST_TEST_NAME),
                          '". It might mean one of the following:'
                        ),
                        o.createElement(
                          'ul',
                          null,
                          o.createElement(
                            'li',
                            null,
                            'The error was thrown, while Vitest was running this test.'
                          ),
                          o.createElement(
                            'li',
                            null,
                            'If the error occurred after the test had been completed, this was the last documented test before it was thrown.'
                          )
                        )
                      ),
                    a.stacks &&
                      o.createElement(
                        o.Fragment,
                        null,
                        o.createElement('p', null, o.createElement('b', null, 'Stacks:')),
                        o.createElement(
                          'ul',
                          null,
                          a.stacks.map((d) =>
                            o.createElement(
                              'li',
                              { key: d.file + d.line + d.column },
                              d.file,
                              ':',
                              d.line,
                              ':',
                              d.column,
                              ' - ',
                              d.method || 'unknown method'
                            )
                          )
                        )
                      ),
                    a.stack && o.createElement('p', null, a.stack),
                    a.cause ? o.createElement(z, { error: a.cause }) : null
                  )
                )
              )
            : null;
      return o.createElement(
        F,
        { onEscapeKeyDown: r, onInteractOutside: r, open: c },
        o.createElement(
          Ue,
          null,
          o.createElement(Me, null, 'Storybook Tests error details'),
          o.createElement(
            je,
            null,
            o.createElement(
              N,
              { onClick: e, variant: 'ghost' },
              o.createElement(ie, null),
              'Rerun'
            ),
            o.createElement(
              N,
              { variant: 'ghost', asChild: !0 },
              o.createElement('a', { target: '_blank', href: l, rel: 'noreferrer' }, 'Troubleshoot')
            ),
            o.createElement(
              f,
              { onClick: r, 'aria-label': 'Close modal' },
              o.createElement(re, null)
            )
          )
        ),
        o.createElement(
          Ne,
          null,
          g,
          o.createElement('br', null),
          o.createElement('br', null),
          'Troubleshoot:',
          ' ',
          o.createElement(He, { target: '_blank', href: l }, l)
        )
      );
    }
    function Ge() {}
    function de(e) {
      return Object.getOwnPropertySymbols(e).filter((t) =>
        Object.prototype.propertyIsEnumerable.call(e, t)
      );
    }
    function me(e) {
      return e == null
        ? e === void 0
          ? '[object Undefined]'
          : '[object Null]'
        : Object.prototype.toString.call(e);
    }
    var $e = '[object RegExp]',
      ze = '[object String]',
      We = '[object Number]',
      Ke = '[object Boolean]',
      ge = '[object Arguments]',
      Ye = '[object Symbol]',
      Ve = '[object Date]',
      Ze = '[object Map]',
      qe = '[object Set]',
      Je = '[object Array]',
      Qe = '[object Function]',
      Xe = '[object ArrayBuffer]',
      G = '[object Object]',
      et = '[object Error]',
      tt = '[object DataView]',
      ot = '[object Uint8Array]',
      nt = '[object Uint8ClampedArray]',
      rt = '[object Uint16Array]',
      at = '[object Uint32Array]',
      lt = '[object BigUint64Array]',
      ct = '[object Int8Array]',
      st = '[object Int16Array]',
      it = '[object Int32Array]',
      ut = '[object BigInt64Array]',
      dt = '[object Float32Array]',
      mt = '[object Float64Array]';
    function Ie(e) {
      if (!e || typeof e != 'object') return !1;
      let t = Object.getPrototypeOf(e);
      return t === null || t === Object.prototype || Object.getPrototypeOf(t) === null
        ? Object.prototype.toString.call(e) === '[object Object]'
        : !1;
    }
    function gt(e, t) {
      return e === t || (Number.isNaN(e) && Number.isNaN(t));
    }
    function It(e, t, n) {
      return A(e, t, void 0, void 0, void 0, void 0, n);
    }
    function A(e, t, n, c, u, r, l) {
      let i = l(e, t, n, c, u, r);
      if (i !== void 0) return i;
      if (typeof e == typeof t)
        switch (typeof e) {
          case 'bigint':
          case 'string':
          case 'boolean':
          case 'symbol':
          case 'undefined':
            return e === t;
          case 'number':
            return e === t || Object.is(e, t);
          case 'function':
            return e === t;
          case 'object':
            return w(e, t, r, l);
        }
      return w(e, t, r, l);
    }
    function w(e, t, n, c) {
      if (Object.is(e, t)) return !0;
      let u = me(e),
        r = me(t);
      if ((u === ge && (u = G), r === ge && (r = G), u !== r)) return !1;
      switch (u) {
        case ze:
          return e.toString() === t.toString();
        case We: {
          let s = e.valueOf(),
            g = t.valueOf();
          return gt(s, g);
        }
        case Ke:
        case Ve:
        case Ye:
          return Object.is(e.valueOf(), t.valueOf());
        case $e:
          return e.source === t.source && e.flags === t.flags;
        case Qe:
          return e === t;
      }
      n = n ?? new Map();
      let l = n.get(e),
        i = n.get(t);
      if (l != null && i != null) return l === t;
      (n.set(e, t), n.set(t, e));
      try {
        switch (u) {
          case Ze: {
            if (e.size !== t.size) return !1;
            for (let [s, g] of e.entries())
              if (!t.has(s) || !A(g, t.get(s), s, e, t, n, c)) return !1;
            return !0;
          }
          case qe: {
            if (e.size !== t.size) return !1;
            let s = Array.from(e.values()),
              g = Array.from(t.values());
            for (let a = 0; a < s.length; a++) {
              let d = s[a],
                m = g.findIndex((p) => A(d, p, void 0, e, t, n, c));
              if (m === -1) return !1;
              g.splice(m, 1);
            }
            return !0;
          }
          case Je:
          case ot:
          case nt:
          case rt:
          case at:
          case lt:
          case ct:
          case st:
          case it:
          case ut:
          case dt:
          case mt: {
            if (
              (typeof Buffer < 'u' && Buffer.isBuffer(e) !== Buffer.isBuffer(t)) ||
              e.length !== t.length
            )
              return !1;
            for (let s = 0; s < e.length; s++) if (!A(e[s], t[s], s, e, t, n, c)) return !1;
            return !0;
          }
          case Xe:
            return e.byteLength !== t.byteLength
              ? !1
              : w(new Uint8Array(e), new Uint8Array(t), n, c);
          case tt:
            return e.byteLength !== t.byteLength || e.byteOffset !== t.byteOffset
              ? !1
              : w(new Uint8Array(e), new Uint8Array(t), n, c);
          case et:
            return e.name === t.name && e.message === t.message;
          case G: {
            if (!(w(e.constructor, t.constructor, n, c) || (Ie(e) && Ie(t)))) return !1;
            let s = [...Object.keys(e), ...de(e)],
              g = [...Object.keys(t), ...de(t)];
            if (s.length !== g.length) return !1;
            for (let a = 0; a < s.length; a++) {
              let d = s[a],
                m = e[d];
              if (!Object.hasOwn(t, d)) return !1;
              let p = t[d];
              if (!A(m, p, d, e, t, n, c)) return !1;
            }
            return !0;
          }
          default:
            return !1;
        }
      } finally {
        (n.delete(e), n.delete(t));
      }
    }
    function pt(e, t) {
      return It(e, t, Ge);
    }
    var pe = (e, t, n) => {
        let c = {
          'status-value:pending': [],
          'status-value:success': [],
          'status-value:error': [],
          'status-value:warning': [],
          'status-value:unknown': [],
        };
        return (
          (n ? n.map((u) => e[u]).filter(Boolean) : Object.values(e)).forEach((u) => {
            let r = u[t];
            r && c[r.value].push(r.storyId);
          }),
          c
        );
      },
      _e = (e, t) => {
        let n = ee((p) => p[O]),
          [c, u] = te(b),
          [r, l] = R(!1),
          i = q();
        U(() => {
          let p = b.onStateChange((_, D) => {
            pt(_.config, D.config) ||
              (Te.settingsChanged(),
              l(!0),
              clearTimeout(i.current),
              (i.current = setTimeout(() => {
                l(!1);
              }, 1e3)));
          });
          return () => {
            (p(), clearTimeout(i.current));
          };
        }, []);
        let s = Z(() => (t ? e.findAllLeafStoryIds(t) : void 0), [t, e]),
          g = L((p) => pe(p, Se, s), [s]),
          a = M(g),
          d = L((p) => pe(p, Ee, s), [s]),
          m = M(d);
        return {
          storeState: c,
          setStoreState: u,
          testProviderState: n,
          componentTestStatusValueToStoryIds: a,
          a11yStatusValueToStoryIds: m,
          isSettingsUpdated: r,
        };
      },
      ht = ({ timestamp: e }) => {
        let [t, n] = R(null);
        if (
          (U(() => {
            if (e) {
              n(Date.now() - e);
              let i = setInterval(() => n(Date.now() - e), 1e4);
              return () => clearInterval(i);
            }
          }, [e]),
          t === null)
        )
          return null;
        let c = Math.round(t / 1e3);
        if (c < 60) return 'just now';
        let u = Math.floor(c / 60);
        if (u < 60) return u === 1 ? 'a minute ago' : `${u} minutes ago`;
        let r = Math.floor(u / 60);
        if (r < 24) return r === 1 ? 'an hour ago' : `${r} hours ago`;
        let l = Math.floor(r / 24);
        return l === 1 ? 'yesterday' : `${l} days ago`;
      },
      ft = I.div(({ theme: e }) => ({
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        fontSize: e.typography.size.s1,
        color: e.textMutedColor,
      })),
      bt = I.span(({ theme: e }) => ({ color: e.color.positiveText }));
    function vt({ entryId: e, storeState: t, testProviderState: n, isSettingsUpdated: c, ...u }) {
      let { setModalOpen: r } = o.useContext(W),
        {
          componentTestCount: l,
          totalTestCount: i,
          unhandledErrors: s,
          finishedAt: g,
        } = t.currentRun,
        a = l.success + l.error,
        d = 'Not run';
      if (!e && c) d = o.createElement(bt, null, 'Settings updated');
      else if (n === 'test-provider-state:running')
        d = (a ?? 0) === 0 ? 'Starting...' : `Testing... ${a}/${i}`;
      else if (!e && n === 'test-provider-state:crashed')
        d = r
          ? o.createElement(H, { isButton: !0, onClick: () => r(!0) }, 'View full error')
          : 'Crashed';
      else if (!e && s.length > 0) {
        let m = `View ${s.length} unhandled error${s?.length > 1 ? 's' : ''}`;
        d = r ? o.createElement(H, { isButton: !0, onClick: () => r(!0) }, m) : m;
      } else
        e && i
          ? (d = `Ran ${i} ${i === 1 ? 'test' : 'tests'}`)
          : g
            ? (d = o.createElement(
                o.Fragment,
                null,
                'Ran ',
                i,
                ' ',
                i === 1 ? 'test' : 'tests',
                ' ',
                o.createElement(ht, { timestamp: g })
              ))
            : t.watching && (d = 'Watching for file changes');
      return o.createElement(ft, { ...u }, d);
    }
    var B = I.div(
        ({ percentage: e }) => ({
          width: e ? 12 : 6,
          height: e ? 12 : 6,
          margin: e ? 1 : 4,
          background: e
            ? `conic-gradient(var(--status-color) ${e}%, var(--status-background) ${e + 1}%)`
            : 'var(--status-color)',
          borderRadius: '50%',
        }),
        ({ isRunning: e, theme: t }) =>
          e && { animation: `${t.animation.glow} 1.5s ease-in-out infinite` },
        ({ status: e, theme: t }) =>
          e === 'positive' && {
            '--status-color': t.color.positive,
            '--status-background': `${t.color.positive}66`,
          },
        ({ status: e, theme: t }) =>
          e === 'warning' && {
            '--status-color': t.color.gold,
            '--status-background': `${t.color.gold}66`,
          },
        ({ status: e, theme: t }) =>
          e === 'negative' && {
            '--status-color': t.color.negative,
            '--status-background': `${t.color.negative}66`,
          },
        ({ status: e, theme: t }) =>
          e === 'critical' && {
            '--status-color': t.color.defaultText,
            '--status-background': `${t.color.defaultText}66`,
          },
        ({ status: e, theme: t }) =>
          e === 'unknown' && {
            '--status-color': t.color.mediumdark,
            '--status-background': `${t.color.mediumdark}66`,
          }
      ),
      yt = I.div({ display: 'flex', flexDirection: 'column' }),
      St = I.div({ display: 'flex', justifyContent: 'space-between', padding: '8px 0', gap: 12 }),
      Et = I.div({ display: 'flex', flexDirection: 'column', marginLeft: 8, minWidth: 0 }),
      he = I.div(({ crashed: e, theme: t }) => ({
        fontSize: t.typography.size.s1,
        fontWeight: e ? 'bold' : 'normal',
        color: e ? t.color.negativeText : t.color.defaultText,
      })),
      Tt = I.div({ display: 'flex', gap: 4 }),
      _t = I.div({ marginBottom: 2 }),
      Ct = I.span(({ theme: e }) => ({ color: e.textMutedColor })),
      At = I(ne)({ margin: 4 }),
      $ = I.div({ display: 'flex', gap: 4 }),
      wt = I(se)({ width: 10 }),
      fe = ({ api: e, panelId: t, entryId: n }) => {
        let c = n ? e.findAllLeafStoryIds(n)[0] : void 0;
        (c && e.selectStory(c), e.setSelectedPanel(t), e.togglePanel(!0));
      },
      Ce = ({
        api: e,
        entry: t,
        testProviderState: n,
        storeState: c,
        setStoreState: u,
        componentTestStatusValueToStoryIds: r,
        a11yStatusValueToStoryIds: l,
        isSettingsUpdated: i,
        ...s
      }) => {
        let { config: g, watching: a, cancelling: d, currentRun: m, fatalError: p } = c,
          _ = m.componentTestCount.success + m.componentTestCount.error,
          D = k.experimental_getRegisteredAddons().includes(ve),
          h = n === 'test-provider-state:running',
          Ae = h && _ === 0,
          [we, K] = p
            ? ['critical', 'Component tests crashed']
            : r['status-value:error'].length > 0
              ? ['negative', 'Component tests failed']
              : h
                ? ['unknown', 'Testing in progress']
                : r['status-value:success'].length > 0
                  ? ['positive', 'Component tests passed']
                  : ['unknown', 'Run tests to see results'],
          [Oe, Y] = p
            ? ['critical', 'Component tests crashed']
            : l['status-value:error'].length > 0
              ? ['negative', 'Accessibility tests failed']
              : l['status-value:warning'].length > 0
                ? ['warning', 'Accessibility tests failed']
                : h
                  ? ['unknown', 'Testing in progress']
                  : l['status-value:success'].length > 0
                    ? ['positive', 'Accessibility tests passed']
                    : ['unknown', 'Run tests to see accessibility results'];
        return o.createElement(
          yt,
          { ...s },
          o.createElement(
            St,
            null,
            o.createElement(
              Et,
              null,
              t
                ? o.createElement(he, { id: 'testing-module-title' }, 'Run component tests')
                : o.createElement(
                    he,
                    {
                      id: 'testing-module-title',
                      crashed:
                        n === 'test-provider-state:crashed' ||
                        p !== void 0 ||
                        m.unhandledErrors.length > 0,
                    },
                    m.unhandledErrors.length === 1
                      ? 'Component tests completed with an error'
                      : m.unhandledErrors.length > 1
                        ? 'Component tests completed with errors'
                        : p
                          ? 'Component tests didn\u2019t complete'
                          : 'Run component tests'
                  ),
              o.createElement(vt, {
                id: 'testing-module-description',
                storeState: c,
                testProviderState: n,
                entryId: t?.id,
                isSettingsUpdated: i,
              })
            ),
            o.createElement(
              Tt,
              null,
              !t &&
                o.createElement(
                  T,
                  {
                    hasChrome: !1,
                    trigger: 'hover',
                    tooltip: o.createElement(E, { note: `${a ? 'Disable' : 'Enable'} watch mode` }),
                  },
                  o.createElement(
                    f,
                    {
                      'aria-label': `${a ? 'Disable' : 'Enable'} watch mode`,
                      size: 'medium',
                      active: a,
                      onClick: () => b.send({ type: 'TOGGLE_WATCHING', payload: { to: !a } }),
                      disabled: h,
                    },
                    o.createElement(ae, null)
                  )
                ),
              h
                ? o.createElement(
                    T,
                    {
                      hasChrome: !1,
                      trigger: 'hover',
                      tooltip: o.createElement(E, { note: d ? 'Stopping...' : 'Stop test run' }),
                    },
                    o.createElement(
                      f,
                      {
                        'aria-label': d ? 'Stopping...' : 'Stop test run',
                        padding: 'none',
                        size: 'medium',
                        onClick: () => b.send({ type: 'CANCEL_RUN' }),
                        disabled: d || Ae,
                      },
                      o.createElement(
                        At,
                        {
                          percentage:
                            _ && c.currentRun.totalTestCount
                              ? (_ / c.currentRun.totalTestCount) * 100
                              : void 0,
                        },
                        o.createElement(wt, null)
                      )
                    )
                  )
                : o.createElement(
                    T,
                    {
                      hasChrome: !1,
                      trigger: 'hover',
                      tooltip: o.createElement(E, { note: 'Start test run' }),
                    },
                    o.createElement(
                      f,
                      {
                        'aria-label': 'Start test run',
                        size: 'medium',
                        onClick: () =>
                          b.send({
                            type: 'TRIGGER_RUN',
                            payload: {
                              storyIds: t ? e.findAllLeafStoryIds(t.id) : void 0,
                              triggeredBy: t ? t.type : 'global',
                            },
                          }),
                      },
                      o.createElement(ce, null)
                    )
                  )
            )
          ),
          o.createElement(
            _t,
            null,
            o.createElement(
              $,
              null,
              o.createElement(P, {
                as: 'label',
                title: 'Interactions',
                icon: t ? null : o.createElement(x.Checkbox, { checked: !0, disabled: !0 }),
              }),
              o.createElement(
                T,
                { hasChrome: !1, trigger: 'hover', tooltip: o.createElement(E, { note: K }) },
                o.createElement(
                  f,
                  {
                    size: 'medium',
                    disabled:
                      r['status-value:error'].length === 0 &&
                      r['status-value:warning'].length === 0 &&
                      r['status-value:success'].length === 0,
                    onClick: () => {
                      fe({
                        api: e,
                        panelId: be,
                        entryId:
                          r['status-value:error'][0] ??
                          r['status-value:warning'][0] ??
                          r['status-value:success'][0] ??
                          t?.id,
                      });
                    },
                  },
                  o.createElement(B, { status: we, 'aria-label': K, isRunning: h }),
                  r['status-value:error'].length + r['status-value:warning'].length || null
                )
              )
            ),
            !t &&
              o.createElement(
                $,
                null,
                o.createElement(P, {
                  as: 'label',
                  title: a ? o.createElement(Ct, null, 'Coverage (unavailable)') : 'Coverage',
                  icon: o.createElement(x.Checkbox, {
                    checked: g.coverage,
                    disabled: h,
                    onChange: () =>
                      u((C) => ({ ...C, config: { ...C.config, coverage: !g.coverage } })),
                  }),
                }),
                o.createElement(
                  T,
                  {
                    hasChrome: !1,
                    trigger: 'hover',
                    tooltip: o.createElement(E, {
                      note: a
                        ? 'Unavailable in watch mode'
                        : m.triggeredBy && !ue.includes(m.triggeredBy)
                          ? 'Unavailable when running focused tests'
                          : h
                            ? 'Testing in progress'
                            : m.coverageSummary
                              ? 'View coverage report'
                              : p
                                ? 'Component tests crashed'
                                : 'Run tests to calculate coverage',
                    }),
                  },
                  a || (m.triggeredBy && !ue.includes(m.triggeredBy))
                    ? o.createElement(
                        f,
                        { size: 'medium', disabled: !0 },
                        o.createElement(le, {
                          'aria-label': a
                            ? 'Coverage is unavailable in watch mode'
                            : 'Coverage is unavailable when running focused tests',
                        })
                      )
                    : m.coverageSummary
                      ? o.createElement(
                          f,
                          { asChild: !0, size: 'medium' },
                          o.createElement(
                            'a',
                            {
                              href: '/coverage/index.html',
                              target: '_blank',
                              'aria-label': 'Open coverage report',
                            },
                            o.createElement(B, {
                              isRunning: h,
                              percentage: m.coverageSummary.percentage,
                              status: m.coverageSummary.status,
                              'aria-label': `Coverage status: ${m.coverageSummary.status}`,
                            }),
                            o.createElement(
                              'span',
                              { 'aria-label': `${m.coverageSummary.percentage} percent coverage` },
                              m.coverageSummary.percentage,
                              '%'
                            )
                          )
                        )
                      : o.createElement(
                          f,
                          { size: 'medium', disabled: !0 },
                          o.createElement(B, {
                            isRunning: h,
                            status: p ? 'critical' : 'unknown',
                            'aria-label': 'Coverage status: unknown',
                          })
                        )
                )
              ),
            D &&
              o.createElement(
                $,
                null,
                o.createElement(P, {
                  as: 'label',
                  title: 'Accessibility',
                  icon: t
                    ? null
                    : o.createElement(x.Checkbox, {
                        checked: g.a11y,
                        disabled: h,
                        onChange: () =>
                          u((C) => ({ ...C, config: { ...C.config, a11y: !g.a11y } })),
                      }),
                }),
                o.createElement(
                  T,
                  { hasChrome: !1, trigger: 'hover', tooltip: o.createElement(E, { note: Y }) },
                  o.createElement(
                    f,
                    {
                      size: 'medium',
                      disabled:
                        l['status-value:error'].length === 0 &&
                        l['status-value:warning'].length === 0 &&
                        l['status-value:success'].length === 0,
                      onClick: () => {
                        fe({
                          api: e,
                          entryId:
                            l['status-value:error'][0] ??
                            l['status-value:warning'][0] ??
                            l['status-value:success'][0] ??
                            t?.id,
                          panelId: ye,
                        });
                      },
                    },
                    o.createElement(B, { status: Oe, 'aria-label': Y, isRunning: h }),
                    l['status-value:error'].length + l['status-value:warning'].length || null
                  )
                )
              )
          )
        );
      },
      Ot = ({ context: e, api: t }) => {
        let {
          testProviderState: n,
          componentTestStatusValueToStoryIds: c,
          a11yStatusValueToStoryIds: u,
          storeState: r,
          setStoreState: l,
        } = _e(t, e.id);
        return o.createElement(Ce, {
          api: t,
          entry: e,
          style: { minWidth: 240 },
          testProviderState: n,
          componentTestStatusValueToStoryIds: c,
          a11yStatusValueToStoryIds: u,
          storeState: r,
          setStoreState: l,
          isSettingsUpdated: !1,
        });
      };
    k.register(O, (e) => {
      if ((globalThis.STORYBOOK_BUILDER || '').includes('vite')) {
        let t = (n) => {
          (e.setSelectedPanel(n), e.togglePanel(!0));
        };
        (De.onSelect(() => {
          t(be);
        }),
          Le.onSelect(() => {
            t(ye);
          }),
          Te.onRunAll(() => {
            b.send({ type: 'TRIGGER_RUN', payload: { triggeredBy: 'run-all' } });
          }),
          b.untilReady().then(() => {
            b.setState((n) => ({
              ...n,
              indexUrl: new URL('index.json', window.location.href).toString(),
            }));
          }),
          k.add(ke, {
            type: J.experimental_TEST_PROVIDER,
            render: () => {
              let [n, c] = R(!1),
                {
                  storeState: u,
                  setStoreState: r,
                  testProviderState: l,
                  componentTestStatusValueToStoryIds: i,
                  a11yStatusValueToStoryIds: s,
                  isSettingsUpdated: g,
                } = _e(e);
              return o.createElement(
                W.Provider,
                { value: { isModalOpen: n, setModalOpen: c } },
                o.createElement(Ce, {
                  api: e,
                  storeState: u,
                  setStoreState: r,
                  isSettingsUpdated: g,
                  testProviderState: l,
                  componentTestStatusValueToStoryIds: i,
                  a11yStatusValueToStoryIds: s,
                }),
                o.createElement(Fe, {
                  storeState: u,
                  onRerun: () => {
                    (c(!1), b.send({ type: 'TRIGGER_RUN', payload: { triggeredBy: 'global' } }));
                  },
                })
              );
            },
            sidebarContextMenu: ({ context: n }) =>
              n.type === 'docs' || (n.type === 'story' && !n.tags.includes('test'))
                ? null
                : o.createElement(Ot, { context: n, api: e }),
          }));
      }
    });
  })();
} catch (e) {
  console.error('[Storybook] One of your manager-entries failed: ' + import.meta.url, e);
}
