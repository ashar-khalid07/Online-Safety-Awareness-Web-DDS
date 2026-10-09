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
        // /i used so that its not case sensitive. Checking if any of the 3 words urgent, immediately or act now is used
        //g so that it finds all matches not just the first one
        //s+ for one or more spaces /d{1,3} means between 1 and 3 digits and /b is so that it only looks for tk not t***k and class it as true
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
            label.textContent = "Moderate likelyhood of phishing (" + percent +"%)";
        }
        else 
        {
            bar.style.backgroundColor = "#639922";
            label.textContent = "low likelyhood of phishing (" + percent +"%)";
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
    //() => creates a function in js
    const enteredMsg = document.getElementById("enteredMail");
    const senderName = document.getElementById("nameChecker");
    const senderEmail = document.getElementById("senderChecker");
    const detectButton = document.getElementById("detectButton");
    //.value() added so that they're stored as string rather than objects
    detectButton.addEventListener("click", () => {new PhishingChecker(enteredMsg.value,senderEmail.value,senderName.value)} );
    
}   