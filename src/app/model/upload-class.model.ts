export class UploadClass {
  private module: string;
  private majorType: string;
  private mainType: string;
  private email: string;
  private text1: string;
  private text2: string;
  private text3: string;
  private text4: string;


  constructor(module: string, majorType: string, mainType: string, email: string, text1: string, text2: string, text3: string, text4: string) {
    this.module = module;
    this.majorType = majorType;
    this.mainType = mainType;
    this.email = email;
    this.text1 = text1;
    this.text2 = text2;
    this.text3 = text3;
    this.text4 = text4;
  }
}
