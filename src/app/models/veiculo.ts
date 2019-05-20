export class Veiculo {
  prefixo: String;
  osId: Number;
  valeta: String;
  active: Boolean;
  codigoAccess: String;

  constructor(prefixo, osId, valeta: String, active: Boolean, codigoAccess: String) {
    this.prefixo = prefixo;
    this.osId = osId;
    this.valeta = valeta;
    this.active = active;
    this.codigoAccess = codigoAccess;
  }
}
