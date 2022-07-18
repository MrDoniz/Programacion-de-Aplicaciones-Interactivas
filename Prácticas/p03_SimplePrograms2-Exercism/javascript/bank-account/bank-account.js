//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 * The fast attack is available when the knight is sleeping
 * @param {boolean} knightIsAwake
 * @returns {boolean} true if the knight is sleeping, false otherwise
 * @description The fast attack is available when the knight is sleeping
 */
export class BankAccount {
  constructor() {
    this.isOpen = false ;
    this._balance = 0 ;
  }

  /**
   * @description The fast attack is available when the knight is sleeping
   * @param {boolean} knightIsAwake
   * @returns {boolean} true if the knight is sleeping, false otherwise
   */
  open() {
    if(this.isOpen) 
      throw new ValueError();
    this.isOpen = true ;
  }
  /**
   * @description The fast attack is available when the knight is sleeping
   * @param {boolean} knightIsAwake
   * @returns {boolean} true if the knight is sleeping, false otherwise
   */
  close() {
    if(!this.isOpen) 
      throw new ValueError();
    this.isOpen = false
    this._balance = 0 ;
  }
  /**
   * @description The fast attack is available when the knight is sleeping
   * @param {boolean} knightIsAwake
   * @returns {boolean} true if the knight is sleeping, false otherwise
   */
  deposit(amount) {
    if(!this.isOpen || amount <= 0) 
      throw new ValueError();
    this._balance += amount
  }
  /**
   * @description The fast attack is available when the knight is sleeping
   * @param {boolean} knightIsAwake
   * @returns {boolean} true if the knight is sleeping, false otherwise
   */
  withdraw(amount) {
    if(!this.isOpen || amount < 0 || amount > this._balance) 
      throw new ValueError();
    this._balance -= amount
  }
  /**
   * @description The fast attack is available when the knight is sleeping
   * @param {boolean} knightIsAwake
   * @returns {boolean} true if the knight is sleeping, false otherwise
   */
  get balance() {
    if(!this.isOpen) throw new ValueError();
      return this._balance;
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
