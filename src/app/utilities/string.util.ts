export abstract class StringHelper {
  public static zeroPadNumberToStringOfLengthTwo(number: number): string {
    return StringHelper.zeroPadNumberToStringOfLength(number, 2);
  }

  public static zeroPadNumberToStringOfLength(number: number, length: number): string {
    let string = number.toString();
    while (string.length < length) {
      string = "0" + string;
    }
    return string;
  }

  public static toTitleCase(text) {
    return text.toLowerCase()
      .split(" ")
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join(" ");
  }

  public static fromHtmlToLabel(text) {
    const spacedName = text.replaceAll("-", " ");
    return StringHelper.toTitleCase(spacedName);
  }
}
