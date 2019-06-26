export class FilterItem {
  label: string;
  value: string | boolean;
  name: string;


  constructor(label: string, value: string | boolean, name: string) {
    this.label = label;
    this.value = value;
    this.name = name;
  }
}
