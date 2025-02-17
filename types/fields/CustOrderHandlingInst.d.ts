export declare enum CustOrderHandlingInst {
    PhoneSimple = "A",
    GOrderAndFCMAPIorFIX = "G",
    PhoneComplex = "B",
    AddOnOrder = "ADD",
    FCMProvidedScreen = "C",
    AllOrNone = "AON",
    OtherProvidedScreen = "D",
    ConditionalOrder = "CND",
    ClientProvidedPlatformControlledByFCM = "E",
    CashNotHeld = "CNH",
    ClientProvidedPlatformDirectToExchange = "F",
    DeliveryInstructionsCash = "CSH",
    DirectedOrder = "DIR",
    AlgoEngine = "H",
    DiscretionaryLimitOrder = "DLO",
    PriceAtExecution = "J",
    ExchangeForPhysicalTransaction = "E.W",
    DeskElectronic = "W",
    FillOrKill = "FOK",
    DeskPit = "X",
    ClientElectronic = "Y",
    IntraDayCross = "IDX",
    ClientPit = "Z",
    ImbalanceOnly = "IO",
    ImmediateOrCancel = "IOC",
    IntermarketSweepOrder = "ISO",
    LimitOnOpen = "LOO",
    LimitOnClose = "LOC",
    MarketAtOpen = "MAO",
    MarketAtClose = "MAC",
    MarketOnOpen = "MOO",
    MarketOnClose = "MOC",
    MergerRelatedTransferPosition = "MPT",
    MinimumQuantity = "MQT",
    MarketToLimit = "MTL",
    DeliveryInstructionsNextDay = "ND",
    NotHeld = "NH",
    OptionsRelatedTransaction = "OPT",
    OverTheDay = "OVD",
    Pegged = "PEG",
    ReserveSizeOrder = "RSV",
    StopStockTransaction = "S.W",
    Scale = "SCL",
    DeliveryInstructionsSellersOption = "SLR",
    TimeOrder = "TMO",
    TrailingStop = "TS",
    Work = "WRK",
    StayOnOfferside = "F0",
    GoAlong = "F3",
    ParticipateDoNotInitiate = "F6",
    StrictScale = "F7",
    TryToScale = "F8",
    StayOnBidside = "F9",
    NoCross = "FA",
    OKToCross = "FB",
    CallFirst = "FC",
    PercentOfVolume = "FD",
    ReinstateOnSystemFailure = "FH",
    InstitutionOnly = "FI",
    ReinstateOnTradingHalt = "FJ",
    CancelOnTradingHalf = "FK",
    LastPeg = "FL",
    MidPricePeg = "FM",
    NonNegotiable = "FN",
    OpeningPeg = "FO",
    MarketPeg = "FP",
    CancelOnSystemFailure = "FQ",
    PrimaryPeg = "FR",
    Suspend = "FS",
    FixedPegToLocalBBO = "FT",
    PegToVWAP = "FW",
    TradeAlong = "FX",
    TryToStop = "FY",
    CancelIfNotBest = "FZ",
    StrictLimit = "Fb",
    IgnorePriceValidityChecks = "Fc",
    PegToLimitPrice = "Fd",
    WorkToTargetStrategy = "Fe"
}
