export enum Message {
  /** The Heartbeat monitors the status of the communication link and identifies when the last of a string of messages was not received. */
  Heartbeat = '0',
  /** The test request message forces a heartbeat from the opposing application. The test request message checks sequence numbers or verifies communication line status. The opposite application responds to the Test Request with a Heartbeat containing the TestReqID. */
  TestRequest = '1',
  /** The resend request is sent by the receiving application to initiate the retransmission of messages. This function is utilized if a sequence number gap is detected, if the receiving application lost a message, or as a function of the initialization process. */
  ResendRequest = '2',
  /** The reject message should be issued when a message is received but cannot be properly processed due to a session-level rule violation. An example of when a reject may be appropriate would be the receipt of a message with invalid basic data which successfully passes de-encryption, CheckSum and BodyLength checks. */
  Reject = '3',
  /** The sequence reset message is used by the sending application to reset the incoming sequence number on the opposing side. */
  SequenceReset = '4',
  /** The logout message initiates or confirms the termination of a FIX session. Disconnection without the exchange of logout messages should be interpreted as an abnormal condition. */
  Logout = '5',
  IOI = '6',
  /** Advertisement messages are used to announce completed transactions. The advertisement message can be transmitted in various transaction types; NEW, CANCEL and REPLACE. All message types other than NEW modify the state of a previously transmitted advertisement identified in AdvRefID. */
  Advertisement = '7',
  ExecutionReport = '8',
  /** The order cancel reject message is issued by the broker upon receipt of a cancel request or cancel/replace request message which cannot be honored. */
  OrderCancelReject = '9',
  /** The logon message authenticates a user establishing a connection to a remote system. The logon message must be the first message sent by the application requesting to initiate a FIX session. */
  Logon = 'A',
  /** The news message is a general free format message between the broker and institution. The message contains flags to identify the news item's urgency and to allow sorting by subject company (symbol). The News message can be originated at either the broker or institution side, or exchanges and other marketplace venues. */
  News = 'B',
  /** The email message is similar to the format and purpose of the News message, however, it is intended for private use between two parties. */
  Email = 'C',
  NewOrderSingle = 'D',
  /** The NewOrderList Message can be used in one of two ways depending on which market conventions are being followed. */
  NewOrderList = 'E',
  /** The order cancel request message requests the cancellation of all of the remaining quantity of an existing order. Note that the Order Cancel/Replace Request should be used to partially cancel (reduce) an order). */
  OrderCancelRequest = 'F',
  OrderCancelReplaceRequest = 'G',
  /** The order status request message is used by the institution to generate an order status message back from the broker. */
  OrderStatusRequest = 'H',
  AllocationInstruction = 'J',
  /** The List Cancel Request message type is used by institutions wishing to cancel previously submitted lists either before or during execution. */
  ListCancelRequest = 'K',
  /** The List Execute message type is used by institutions to instruct the broker to begin execution of a previously submitted list. This message may or may not be used, as it may be mirroring a phone conversation. */
  ListExecute = 'L',
  /** The list status request message type is used by institutions to instruct the broker to generate status messages for a list. */
  ListStatusRequest = 'M',
  /** The list status message is issued as the response to a List Status Request message sent in an unsolicited fashion by the sell-side. It indicates the current state of the orders within the list as they exist at the broker's site. This message may also be used to respond to the List Cancel Request. */
  ListStatus = 'N',
  AllocationInstructionAck = 'P',
  /** The Don’t Know Trade (DK) message notifies a trading partner that an electronically received execution has been rejected. This message can be thought of as an execution reject message. */
  DontKnowTrade = 'Q',
  /** In some markets it is the practice to request quotes from brokers prior to placement of an order. The quote request message is used for this purpose. This message is commonly referred to as an Request For Quote (RFQ) */
  QuoteRequest = 'R',
  /** The Quote message is used as the response to a Quote Request or a Quote Response message in both indicative, tradeable, and restricted tradeable quoting markets. */
  Quote = 'S',
  /** The Settlement Instructions message provides the broker’s, the institution’s, or the intermediary’s instructions for trade settlement. This message has been designed so that it can be sent from the broker to the institution, from the institution to the broker, or from either to an independent "standing instructions" database or matching system or, for CIV, from an intermediary to a fund manager. */
  SettlementInstructions = 'T',
  /** Some systems allow the transmission of real-time quote, order, trade, trade volume, open interest, and/or other price information on a subscription basis. A MarketDataRequest(35=V) is a general request for market data on specific securities or forex quotes. The values in the fields provided within the request will serve as further filter criteria for the result set. */
  MarketDataRequest = 'V',
  /** The Market Data messages are used as the response to a Market Data Request message. In all cases, one Market Data message refers only to one Market Data Request. It can be used to transmit a 2-sided book of orders or list of quotes, a list of trades, index values, opening, closing, settlement, high, low, or VWAP prices, the trade volume or open interest for a security, or any combination of these. */
  MarketDataSnapshotFullRefresh = 'W',
  /** The Market Data message for incremental updates may contain any combination of new, changed, or deleted Market Data Entries, for any combination of instruments, with any combination of trades, imbalances, quotes, index values, open, close, settlement, high, low, and VWAP prices, trade volume and open interest so long as the maximum FIX message size is not exceeded. All of these types of Market Data Entries can be changed and deleted. */
  MarketDataIncrementalRefresh = 'X',
  /** The Market Data Request Reject is used when the broker cannot honor the Market Data Request, due to business or technical reasons. Brokers may choose to limit various parameters, such as the size of requests, whether just the top of book or the entire book may be displayed, and whether Full or Incremental updates must be used. */
  MarketDataRequestReject = 'Y',
  QuoteCancel = 'Z',
  QuoteStatusRequest = 'a',
  /** Mass Quote Acknowledgement is used as the application level response to a Mass Quote message. */
  MassQuoteAck = 'b',
  SecurityDefinitionRequest = 'c',
  SecurityDefinition = 'd',
  /** The Security Status Request message provides for the ability to request the status of a security. One or more Security Status messages are returned as a result of a Security Status Request message. */
  SecurityStatusRequest = 'e',
  /** The Security Status message provides for the ability to report changes in status to a security. The Security Status message contains fields to indicate trading status, corporate actions, financial status of the company. The Security Status message is used by one trading entity (for instance an exchange) to report changes in the state of a security. */
  SecurityStatus = 'f',
  /** The Trading Session Status Request is used to request information on the status of a market. With the move to multiple sessions occurring for a given trading party (morning and evening sessions for instance) there is a need to be able to provide information on what product is trading on what market. */
  TradingSessionStatusRequest = 'g',
  /** The Trading Session Status provides information on the status of a market. For markets multiple trading sessions on multiple-markets occurring (morning and evening sessions for instance), this message is able to provide information on what products are trading on what market during what trading session. */
  TradingSessionStatus = 'h',
  /** The Mass Quote message can contain quotes for multiple securities to support applications that allow for the mass quoting of an option series. Two levels of repeating groups have been provided to minimize the amount of data required to submit a set of quotes for a class of options (e.g. all option series for IBM). */
  MassQuote = 'i',
  /** The Business Message Reject message can reject an application-level message which fulfills session-level rules and cannot be rejected via any other means. Note if the message fails a session-level rule (e.g. body length is incorrect), a session-level Reject message should be issued. */
  BusinessMessageReject = 'j',
  BidRequest = 'k',
  BidResponse = 'l',
  /** The strike price message is used to exchange strike price information for principal trades. It can also be used to exchange reference prices for agency trades. */
  ListStrikePrice = 'm',
  XMLnonFIX = 'n',
  /** The Registration Instructions message type may be used by institutions or retail intermediaries wishing to electronically submit registration information to a broker or fund manager (for CIV) for an order or for an allocation. */
  RegistrationInstructions = 'o',
  /** The Registration Instructions Response message type may be used by broker or fund manager (for CIV) in response to a Registration Instructions message submitted by an institution or retail intermediary for an order or for an allocation. */
  RegistrationInstructionsResponse = 'p',
  /** The order mass cancel request message requests the cancellation of all of the remaining quantity of a group of orders matching criteria specified within the request. NOTE: This message can only be used to cancel order messages (reduce the full quantity). */
  OrderMassCancelRequest = 'q',
  /** The Order Mass Cancel Report is used to acknowledge an Order Mass Cancel Request. Note that each affected order that is canceled is acknowledged with a separate Execution Report or Order Cancel Reject message. */
  OrderMassCancelReport = 'r',
  /** Used to submit a cross order into a market. The cross order contains two order sides (a buy and a sell). The cross order is identified by its CrossID. */
  NewOrderCross = 's',
  /** Used to modify a cross order previously submitted using the New Order - Cross message. See Order Cancel Replace Request for details concerning message usage. */
  CrossOrderCancelReplaceRequest = 't',
  /** Used to fully cancel the remaining open quantity of a cross order. */
  CrossOrderCancelRequest = 'u',
  /** The Security Type Request message is used to return a list of security types available from a counterparty or market. */
  SecurityTypeRequest = 'v',
  /** The Security Type Request message is used to return a list of security types available from a counterparty or market. */
  SecurityTypes = 'w',
  /** The Security List Request message is used to return a list of securities from the counterparty that match criteria provided on the request */
  SecurityListRequest = 'x',
  /** The Security List message is used to return a list of securities that matches the criteria specified in a Security List Request. */
  SecurityList = 'y',
  /** The Derivative Security List Request message is used to return a list of securities from the counterparty that match criteria provided on the request */
  DerivativeSecurityListRequest = 'z',
  /** The Derivative Security List message is used to return a list of securities that matches the criteria specified in a Derivative Security List Request. */
  DerivativeSecurityList = 'AA',
  /** The New Order - Multileg is provided to submit orders for securities that are made up of multiple securities, known as legs. */
  NewOrderMultileg = 'AB',
  /** Used to modify a multileg order previously submitted using the New Order - Multileg message. See Order Cancel Replace Request for details concerning message usage. */
  MultilegOrderCancelReplace = 'AC',
  TradeCaptureReportRequest = 'AD',
  TradeCaptureReport = 'AE',
  /** The order mass status request message requests the status for orders matching criteria specified within the request. */
  OrderMassStatusRequest = 'AF',
  /** The Quote Request Reject message is used to reject Quote Request messages for all quoting models. */
  QuoteRequestReject = 'AG',
  /** In tradeable and restricted tradeable quoting markets – Quote Requests are issued by counterparties interested in ascertaining the market for an instrument. Quote Requests are then distributed by the market to liquidity providers who make markets in the instrument. The RFQ Request is used by liquidity providers to indicate to the market for which instruments they are interested in receiving Quote Requests. It can be used to register interest in receiving quote requests for a single instrument or for multiple instruments */
  RFQRequest = 'AH',
  QuoteStatusReport = 'AI',
  QuoteResponse = 'AJ',
  /** The Confirmation messages are used to provide individual trade level confirmations from the sell side to the buy side. In versions of FIX prior to version 4.4, this role was performed by the allocation message. Unlike the allocation message, the confirmation message operates at an allocation account (trade) level rather than block level, allowing for the affirmation or rejection of individual confirmations. */
  Confirmation = 'AK',
  /** The Position Maintenance Request message allows the position owner to submit requests to the holder of a position which will result in a specific action being taken which will affect the position. Generally, the holder of the position is a central counter party or clearing organization but can also be a party providing investment services. */
  PositionMaintenanceRequest = 'AL',
  /** The Position Maintenance Report message is sent by the holder of a position in response to a Position Maintenance Request and is used to confirm that a request has been successfully processed or rejected. */
  PositionMaintenanceReport = 'AM',
  /** The Request For Positions message is used by the owner of a position to request a Position Report from the holder of the position, usually the central counter party or clearing organization. The request can be made at several levels of granularity. */
  RequestForPositions = 'AN',
  /** The Request for Positions Ack message is returned by the holder of the position in response to a Request for Positions message. The purpose of the message is to acknowledge that a request has been received and is being processed. */
  RequestForPositionsAck = 'AO',
  /** The Position Report message is returned by the holder of a position in response to a Request for Position message. The purpose of the message is to report all aspects of a position and may be provided on a standing basis to report end of day positions to an owner. */
  PositionReport = 'AP',
  TradeCaptureReportRequestAck = 'AQ',
  TradeCaptureReportAck = 'AR',
  AllocationReport = 'AS',
  /** The Allocation Report Ack message is used to acknowledge the receipt of and provide status for an Allocation Report message. */
  AllocationReportAck = 'AT',
  /** The Confirmation Ack (aka Affirmation) message is used to respond to a Confirmation message. */
  ConfirmationAck = 'AU',
  /** The Settlement Instruction Request message is used to request standing settlement instructions from another party. */
  SettlementInstructionRequest = 'AV',
  /** Assignment Reports are sent from a clearing house to counterparties, such as a clearing firm as a result of the assignment process. */
  AssignmentReport = 'AW',
  /** An initiator that requires collateral from a respondent sends a Collateral Request. The initiator can be either counterparty to a trade in a two party model or an intermediary such as an ATS or clearinghouse in a three party model. A Collateral Assignment is expected as a response to a request for collateral. */
  CollateralRequest = 'AX',
  /** Used to assign collateral to cover a trading position. This message can be sent unsolicited or in reply to a Collateral Request message. */
  CollateralAssignment = 'AY',
  /** Used to respond to a Collateral Assignment message. */
  CollateralResponse = 'AZ',
  /** Used to report collateral status when responding to a Collateral Inquiry message. */
  CollateralReport = 'BA',
  /** Used to inquire for collateral status. */
  CollateralInquiry = 'BB',
  /** This message is send either immediately after logging on to inform a network (counterparty system) of the type of updates required or to at any other time in the FIX conversation to change the nature of the types of status updates required. It can also be used with a NetworkRequestType of Snapshot to request a one-off report of the status of a network (or counterparty) system. Finally this message can also be used to cancel a request to receive updates into the status of the counterparties on a network by sending a NetworkRequestStatusMessage with a NetworkRequestType of StopSubscribing. */
  NetworkCounterpartySystemStatusRequest = 'BC',
  /** This message is sent in response to a Network (Counterparty System) Status Request Message. */
  NetworkCounterpartySystemStatusResponse = 'BD',
  /** This message is used to initiate a user action, logon, logout or password change. It can also be used to request a report on a user's status. */
  UserRequest = 'BE',
  /** This message is used to respond to a user request message, it reports the status of the user after the completion of any action requested in the user request message. */
  UserResponse = 'BF',
  CollateralInquiryAck = 'BG',
  /** The Confirmation Request message is used to request a Confirmation message. */
  ConfirmationRequest = 'BH',
  /** The Contrary Intention Report is used for reporting of contrary expiration quantities for Saturday expiring options. This information is required by options exchanges for regulatory purposes. */
  ContraryIntentionReport = 'BO',
  /** This message is used for reporting updates to a product security master file. Updates could be the result of corporate actions or other business events. Updates may include additions, modifications or deletions. */
  SecurityDefinitionUpdateReport = 'BP',
  /** The Security List Update Report is used for reporting updates to a Contract Security Masterfile. Updates could be due to Corporate Actions or other business events. Update may include additions, modifications and deletions. */
  SecurityListUpdateReport = 'BK',
  /** Used to report changes in position, primarily in equity options, due to modifications to the underlying due to corporate actions */
  AdjustedPositionReport = 'BL',
  /** This message is used in a 3-party allocation model (buy-side and sell-side using a central clearing entity) where notification of group creation and group updates to counterparties is needed. The message will also carry trade information that comprised the group to the counterparties. */
  AllocationInstructionAlert = 'BM',
  /** The Execution Report Acknowledgement message is an optional message that provides dual functionality to notify a trading partner that an electronically received execution has either been accepted or rejected (DK'd). */
  ExecutionAck = 'BN',
  /** The Trading Session List message is sent as a response to a Trading Session List Request. The Trading Session List should contain the characteristics of the trading session and the current state of the trading session. */
  TradingSessionList = 'BJ',
  /** The Trading Session List Request is used to request a list of trading sessions available in a market place and the state of those trading sessions. A successful request will result in a response from the counterparty of a Trading Session List (MsgType=BJ) message that contains a list of zero or more trading sessions. */
  TradingSessionListRequest = 'BI',
  /** The Settlement Obligation Report message provides a central counterparty, institution, or individual counterparty with a capacity for reporting the final details of a currency settlement obligation. */
  SettlementObligationReport = 'BQ',
  /** The Derivative Security List Update Report message is used to send updates to an option family or the strikes that comprise an option family. */
  DerivativeSecurityListUpdateReport = 'BR',
  /** The Trading Session List Update Report is used by marketplaces to provide intra-day updates of trading sessions when there are changes to one or more trading sessions. */
  TradingSessionListUpdateReport = 'BS',
  /** The Market Definition Request message is used to request for market structure information from the Respondent that receives this request. */
  MarketDefinitionRequest = 'BT',
  /** The MarketDefinition(35=BU) message is used to respond to MarketDefinitionRequest(35=BT). In a subscription, it will be used to provide the initial snapshot of the information requested. Subsequent updates are provided by the MarketDefinitionUpdateReport(35=BV). */
  MarketDefinition = 'BU',
  /** In a subscription for market structure information, this message is used once the initial snapshot of the information has been sent using the MarketDefinition(35=BU) message. */
  MarketDefinitionUpdateReport = 'BV',
  /** This message is used to request a retransmission of a set of one or more messages generated by the application specified in RefApplID (1355). */
  ApplicationMessageRequest = 'BW',
  /** This message is used to acknowledge an Application Message Request providing a status on the request (i.e. whether successful or not). This message does not provide the actual content of the messages to be resent. */
  ApplicationMessageRequestAck = 'BX',
  /** This message is used for three difference purposes: to reset the ApplSeqNum (1181) of a specified ApplID (1180). to indicate that the last message has been sent for a particular ApplID, or as a keep-alive mechanism for ApplIDs with infrequent message traffic. */
  ApplicationMessageReport = 'BY',
  /** The Order Mass Action Report is used to acknowledge an Order Mass Action Request. Note that each affected order that is suspended or released or canceled is acknowledged with a separate Execution Report for each order. */
  OrderMassActionReport = 'BZ',
  /** The Order Mass Action Request message can be used to request the suspension or release of a group of orders that match the criteria specified within the request. This is equivalent to individual Order Cancel Replace Requests for each order with or without adding "S" to the ExecInst values. It can also be used for mass order cancellation. */
  OrderMassActionRequest = 'CA',
  /** The User Notification message is used to notify one or more users of an event or information from the sender of the message. This message is usually sent unsolicited from a marketplace (e.g. Exchange, ECN) to a market participant. */
  UserNotification = 'CB',
  /** In certain markets where market data aggregators fan out to end clients the pricing streams provided by the price makers, the price maker may assign the clients to certain pricing streams that the price maker publishes via the aggregator. An example of this use is in the FX markets where clients may be assigned to different pricing streams based on volume bands and currency pairs. */
  StreamAssignmentRequest = 'CC',
  /** he StreamAssignmentReport message is in response to the StreamAssignmentRequest message. It provides information back to the aggregator as to which clients to assign to receive which price stream based on requested CCY pair. This message can be sent unsolicited to the Aggregator from the Price Maker. */
  StreamAssignmentReport = 'CD',
  /** This message is used to respond to the Stream Assignment Report, to either accept or reject an unsolicited assingment. */
  StreamAssignmentReportACK = 'CE',
  /** The PartyDetailsListRequest is used to request party detail information. */
  PartyDetailsListRequest = 'CF',
  /** The PartyDetailsListReport message is used to disseminate party details between counterparties. PartyDetailsListReport messages may be sent in response to a PartyDetailsListRequest message or sent unsolicited. */
  PartyDetailsListReport = 'CG',
  MarginRequirementInquiry = 'CH',
  /** Used to respond to a Margin Requirement Inquiry. */
  MarginRequirementInquiryAck = 'CI',
  /** The Margin Requirement Report returns information about margin requirement either as on overview across all margin accounts or on a detailed level due to the inquiry making use of the optional Instrument component block. Application sequencing can be used to re-request a range of reports. */
  MarginRequirementReport = 'CJ',
  /** The PartyDetailsListUpdateReport(35=CK) is used to disseminate updates to party detail information. */
  PartyDetailsListUpdateReport = 'CK',
  /** The PartyRiskLimitsRequest message is used to request for risk information for specific parties, specific party roles or specific instruments. */
  PartyRiskLimitsRequest = 'CL',
  /** The PartyRiskLimitsReport message is used to communicate party risk limits. The message can either be sent as a response to the PartyRiskLimitsRequest message or can be published unsolicited. */
  PartyRiskLimitsReport = 'CM',
  SecurityMassStatusRequest = 'CN',
  SecurityMassStatus = 'CO',
  AccountSummaryReport = 'CQ',
  /** The PartyRiskLimitsUpdateReport(35=CR) is used to convey incremental changes to risk limits. It is similar to the regular report but uses the PartyRiskLimitsUpdateGrp component instead of the PartyRiskLimitsGrp component to include an update action. */
  PartyRiskLimitsUpdateReport = 'CR',
  /** PartyRiskLimitDefinitionRequest is used for defining new risk limits. */
  PartyRiskLimitsDefinitionRequest = 'CS',
  /** PartyRiskLimitDefinitionRequestAck is used for accepting (with or without changes) or rejecting the definition of risk limits. */
  PartyRiskLimitsDefinitionRequestAck = 'CT',
  /** The PartyEntitlementsRequest message is used to request for entitlement information for one or more party(-ies), specific party role(s), or specific instruments(s). */
  PartyEntitlementsRequest = 'CU',
  /** The PartyEntitlementsReport is used to report entitlements for one or more parties, party role(s), or specific instrument(s). */
  PartyEntitlementsReport = 'CV',
  QuoteAck = 'CW',
  PartyDetailsDefinitionRequest = 'CX',
  /** The PartyDetailsDefinitionRequestAck(35=CY) is used as a response to the PartyDetailsDefinitionRequest(35=CX) message. The request can be accepted (with or without changes) or rejected. */
  PartyDetailsDefinitionRequestAck = 'CY',
  /** The PartyEntitlementsUpdateReport(35=CZ) is used to convey incremental changes to party entitlements. It is similar to the PartyEntitlementsReport(35=CV). This message uses the PartyEntitlementsUpdateGrp component which includes the ability to specify an update action using ListUpdateAction(1324). */
  PartyEntitlementsUpdateReport = 'CZ',
  PartyEntitlementsDefinitionRequest = 'DA',
  /** The PartyEntitlementsDefinitionRequestAck(35=DB) is used as a response to the PartyEntitlemensDefinitionRequest(35=DA) to accept (with or without changes) or reject the definition of party entitlements. */
  PartyEntitlementsDefinitionRequestAck = 'DB',
  /** The TradeMatchReport(35=DC) message is used by exchanges and ECN’s to report matched trades to central counterparties (CCPs) as an atomic event. The message is used to express the one-to-one, one-to-many and many-to-many matches as well as implied matches in which more complex instruments can match with simpler instruments. */
  TradeMatchReport = 'DC',
  /** The TradeMatchReportAck(35=DD) is used to respond to theTradeMatchReport(35=DC) message. It may be used to report on the status of the request (e.g. accepting the request or rejecting the request). */
  TradeMatchReportAck = 'DD',
  /** PartyRiskLimitsReportAck is an optional message used as a response to the PartyRiskLimitReport(35=CM) or PartyRiskLimitUpdateReport(35=CR) messages to acknowledge or reject those messages. */
  PartyRiskLimitsReportAck = 'DE',
  /** PartyRiskLimitCheckRequest is used to request for approval of credit or risk limit amount intended to be used by a party in a transaction from another party that holds the information. */
  PartyRiskLimitCheckRequest = 'DF',
  /** PartyRiskLimitCheckRequestAck is used to acknowledge a PartyRiskLimitCheckRequest(35=DF) message and to respond whether the limit check request was approved or not. When used to accept the PartyRiskLimitCheckRequest(35=DF) message the Respondent may also include the limit amount that was approved. */
  PartyRiskLimitCheckRequestAck = 'DG',
  /** The PartyActionRequest message is used suspend or halt the specified party from further trading activities at the Respondent. The Respondent must respond with a PartyActionReport(35=DI) message. */
  PartyActionRequest = 'DH',
  /** Used to respond to the PartyActionRequest(35=DH) message, indicating whether the request has been received, accepted or rejected. Can also be used in an unsolicited manner to report party actions, e.g. reinstatements after a manual intervention out of band. */
  PartyActionReport = 'DI',
  MassOrder = 'DJ',
  MassOrderAck = 'DK',
  /** The PositionTransferInstruction(35=DL) is sent by clearing firms to CCPs to initiate position transfers, or to accept or decline position transfers. */
  PositionTransferInstruction = 'DL',
  PositionTransferInstructionAck = 'DM',
  /** The PositionTransferReport(35=DN) is sent by CCPs to clearing firms indicating of positions that are to be transferred to the clearing firm, or to report on status of the transfer to the clearing firms involved in the transfer process. */
  PositionTransferReport = 'DN',
  MarketDataStatisticsRequest = 'DO',
  MarketDataStatisticsReport = 'DP',
  /** CollateralReportAck(35=DQ) is used as a response to the CollateralReport(35=BA). It can be used to reject a CollateralReport(35=BA) when the content of the report is invalid based on the business rules of the receiver. The message may also be used to acknowledge receipt of a valid CollateralReport(35=BA). */
  CollateralReportAck = 'DQ',
  MarketDataReport = 'DR',
  CrossRequest = 'DS',
  /** The CrossRequestAck(35=DT) message is used to confirm the receipt of a CrossRequest(35=DS) message. */
  CrossRequestAck = 'DT',
  /** This message is used in a clearinghouse 3-party allocation model to request for AllocationInstructionAlert(35=BM) from the clearinghouse. The request may be used to obtain a one-time notification of the status of an allocation group. */
  AllocationInstructionAlertRequest = 'DU',
  /** This message is used in a clearinghouse 3-party allocation model to acknowledge a AllocationInstructionAlertRequest(35=DU) message for an AllocationInstructionAlert(35=BM) message from the clearinghouse. */
  AllocationInstructionAlertRequestAck = 'DV',
  /** TradeAggregationRequest(35=DW) is used to request that the identified trades between the initiator and respondent be aggregated together for further processing. */
  TradeAggregationRequest = 'DW',
  /** TradeAggregationReport(35=DX) is used to respond to the TradeAggregationRequest(35=DW) message. It provides the status of the request (e.g. accepted or rejected) and may also provide additional information supplied by the respondent. */
  TradeAggregationReport = 'DX',
  PayManagementReport = 'EA',
  /** PayManagementReportAck(35=EB) is used as a response to the PayManagementReport(35=EA) message. It may be used to accept, reject or dispute the details of the PayManagementReport(35=EA) depending on the business rules of the receiver. This message may also be used to acknowledge the receipt of a PayManagementReport(35=EA) message. */
  PayManagementReportAck = 'EB',
  PayManagementRequest = 'DY',
  /** PayManagementRequestAck(35=DZ) is used to acknowledge the receipt of the PayManagementRequest(35=DY) message (i.e. a technical acknowledgement of receipt). Acceptance or rejection of the request is reported in the corresponding PayManagementReport(35=EA). */
  PayManagementRequestAck = 'DZ',
  SettlementStatusRequest = 'EC',
  SettlementStatusRequestAck = 'ED',
  /** SettlementStatusReport(35=EE) is a response to the SettlementStatusRequest(35=EC) to provide settlement status for the requested trade. It may also be sent unsolicited without an explicit request message by the party able to provide the settlement status for the trade identified in the report message. */
  SettlementStatusReport = 'EE',
  /** SettlementStatusReportAck(35=EF) is used to respond to the SettlementStatusReport(35=EE) to acknowledge or reject the report. */
  SettlementStatusReportAck = 'EF',
  /** SecurityRiskMetricsReport(35=EG) is used for publishing the risk metrics, valuation metrics or analytics of one or more securities, or for an option series. */
  SecurityRiskMetricsReport = 'EG',
  AlgoCertificateRequest = 'EH',
  AlgoCertificateRequestAck = 'EI',
  AlgoCertificateReport = 'EJ',
  AlgoCertificateReportAck = 'EK',
  TestSuiteDefinitionRequest = 'EL',
  /** TestSuiteDefinitionRequestAck(35=EM) is used to respond to the TestSuiteDefinitionRequest(35= EL) to acknowledge the request and provide status for the request message. */
  TestSuiteDefinitionRequestAck = 'EM',
  TestActionRequest = 'EN',
  /** TestActionRequestAck(35=EO) is used to respond to the TestActionRequest(35=EN) to acknowledge the request and provide status for the request message. */
  TestActionRequestAck = 'EO',
  TestActionReport = 'EP',
}
