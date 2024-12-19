class TextAnimator {
  private text: string = ""; // 完整的目标文本
  private currentText: string = ""; // 当前显示的文本
  private index: number = 0; // 当前字符索引

  constructor() {}

  /**
   * 初始化输入的目标文本
   * @param text 目标文本
   */
  public setText(text: string): void {
    this.text = text;
    this.currentText = "";
    this.index = 0;
  }

  /**
   * 获取下一个字符，逐步更新当前文本
   * @returns 更新后的当前文本
   */
  public getNext(): string {
    if (this.index < this.text.length) {
      this.currentText += this.text[this.index];
      this.index++;
    }
    return this.currentText;
  }

  /**
   * 检查是否完成显示
   * @returns 是否完成
   */
  public isComplete(): boolean {
    return this.index >= this.text.length;
  }
}

export default TextAnimator;
