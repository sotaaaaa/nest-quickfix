export enum ClearingFeeIndicator {
  /** 1st year delegate trading for own account */
  FirstYearDelegate = '1',
  /** 2nd year delegate trading for own account */
  SecondYearDelegate = '2',
  /** 3rd year delegate trading for own account */
  ThirdYearDelegate = '3',
  /** 4th year delegate trading for own account */
  FourthYearDelegate = '4',
  /** 5th year delegate trading for own account */
  FifthYearDelegate = '5',
  /** 6th year delegate trading for own account */
  SixthYearDelegate = '9',
  /** CBOE Member */
  CBOEMember = 'B',
  /** Non-member and Customer */
  NonMemberAndCustomer = 'C',
  /** Equity Member and Clearing Member */
  EquityMemberAndClearingMember = 'E',
  /** Full and Associate Member trading for own account and as floor brokers */
  FullAndAssociateMember = 'F',
  /** 106.H and 106.J firms */
  Firms106HAnd106J = 'H',
  /** GIM, IDEM and COM Membership Interest Holders */
  GIM = 'I',
  /** Lessee 106.F Employees */
  Lessee106FEmployees = 'L',
  /** All other ownership types */
  AllOtherOwnershipTypes = 'M',
}
