export {};

declare global {
  function KCP_Pay_Execute(form) ;
  function KCP_Pay_Execute_Web(form);
  function m_Completepayment(json, event);
  function GetField(targetForm, sourceForm);

  interface Window {
    INIStdPay: any;
  }
}
