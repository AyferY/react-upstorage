
export class GeneratePasswordDto{
    public IncludeNumbers:boolean;
    public IncludeLowercaseNumbers:boolean;
    public IncludeUppercaseNumbers:boolean;
    public IncludeSpecialCharacters:boolean;
    public Length:number;

    constructor(){
        this.IncludeNumbers = true;
        this.IncludeLowercaseNumbers = true;
        this.Length = 0;
    }
}