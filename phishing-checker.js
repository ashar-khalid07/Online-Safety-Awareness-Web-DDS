class PhishingChecker
{
    constructor(enteredMsg, senderEmail,senderName)
    {
        this.enteredMsg = enteredMsg;
        this.senderEmail = senderEmail;
        this.senderName = senderName;
        this.weight = 0
        this.verdict()
    }
    senderChecker(){
        const name = this.senderName.toLowerCase().split(" ")
        const domain = this.senderEmail.toLowerCase()
        for (let i = 0; i < name.length; i++ )
        {
            if (!domain.includes(name[i])){
                this.weight += 3
            }
        }
    }
    keywordChecker()
    {
      const patterns = [
            /urgent|immediately|act now/ig,
            /verify\s+your\s+(account|password|email)/ig,
            /https?:\/\/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/ig,
            /\.(tk|ml|ga|xyz|top)\b/ig,
        ];
    
        patterns.forEach(pattern => {
            const matches = this.enteredMsg.match(pattern);
            if (matches) {
                this.weight += matches.length;
            }
        });
    }
    updateBar(){
        const bar = document.getElementById("resultBar");
        const label = document.getElementById("resultLabel");
        const maxWeight = 10;
        const percent = Math.min(Math.round((this.weight/maxWeight) * 100), 100);
        bar.style.width = percent+"%";
        if (this.weight >=6)
        {
            bar.style.backgroundColor = "#E24B4A";
            label.textContent = "Likely phishing (" + percent +"%)";
        }
        else if (this.weight >=3)
        {
            bar.style.backgroundColor = "#EF9F27";
            label.textContent = "Moderate likelihood of phishing (" + percent +"%)";
        }
        else 
        {
            bar.style.backgroundColor = "#639922";
            label.textContent = "Low likelihood of phishing (" + percent +"%)";
        }
    }
    
    verdict()
    {
        this.senderChecker();
        this.keywordChecker();
        this.updateBar();
    }
}
window.onload = () => {
    const enteredMsg = document.getElementById("enteredMail");
    const senderName = document.getElementById("nameChecker");
    const senderEmail = document.getElementById("senderChecker");
    const detectButton = document.getElementById("detectButton");
    detectButton.addEventListener("click", () => {new PhishingChecker(enteredMsg.value,senderEmail.value,senderName.value)} );
}