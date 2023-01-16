declare interface Ord {
  orderNo: string;
  goodsName: string;
  goodsPrice: number;
  buyerName: string;
  buyerPhone: string;
  buyerEmail: string;
  targetPg: string;
  createDt: Date;
  updateDt: Date;

  pay?: Pay;
}

declare interface Pay {
  id?: string;
  payState?: string;
  orderNo?: string;
  amount?: number;
  createDt: Date;
  payMethod: string;
  resMsg: string;
}
