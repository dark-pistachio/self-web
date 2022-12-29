const decryptButton = document.getElementById("decrypt");
const encryptButton = document.getElementById("encrypt");
const addButton = document.getElementById("add");
const fname = document.getElementById('fname');
const msg = document.querySelector('.msg');

encryptButton.addEventListener('click', onSubmit);
decryptButton.addEventListener('click', onSubmit2);
addButton.addEventListener('click', onSubmit3);
function onSubmit(e) {
    e.preventDefault();
    
    if (fname.value == '') {
        // msg.classList.add('error');
        // msg.innerHTML = 'Please enter all fields';
        alert('Please enter your text.')
    } else {
        var a = submit();
    }
}

function onSubmit2(e) {
    e.preventDefault();
    
    if (fname.value == '') {
        // msg.classList.add('error');
        // msg.innerHTML = 'Please enter all fields';
        alert('Please enter your text.')
    } else {
        var a = submit2();
    }
}
function onSubmit3(e) {
    e.preventDefault();
    
    if (fname.value == '') {
        // msg.classList.add('error');
        // msg.innerHTML = 'Please enter all fields';
        alert('Please enter your text.')
    } else {
        var a = submit3();
    }
}

function submit3() {
    var inputtext = document.getElementById('fname').value;
    let after=["The Communist Party of China", "the vanguard",
    "Chinese working class", "Chinese people","Chinese nation", "core of leadership", "socialism", 
    "Chinese characteristics", "China's advanced productive forces", "China's advanced culture", 
    "the fundamental interests", "the overwhelming majority", "realization of communism", 
    "the highest ideal", "ultimate goal of the Party", "Marxism-Leninism", "Mao Zedong Thought", 
    "Deng Xiaoping Theory", "Three Represents"]
    let before=["white paper protest", "uyghur", "tattoo", "xinjiang", "guonan", "support hk", 
    "dictatorship", "winnie the pooh", "dalai lama", "june 4", "independence"]
    var outputtext
    var num=0;
    for(let i =0; i<before.length; i++){
        if(inputtext.toLowerCase() == before[i]){
            alert('Your text has been collected. Encrypt/decrypt to view the result.')
            num=1
            break;
        }
    }
    if(num==0){
        alert('Your request has been received. We will add the text to our list later.')
    }else{
        console.log('sss')
    }
    // var output = "<div class = 'result'>"
    // output += `<p>${outputtext}</p>` + `</div>`
    // console.log(output)
    // msg.innerHTML = output
}

function submit() {
    var inputtext = document.getElementById('fname').value;
    let after=["The Communist Party of China", "the vanguard",
    "Chinese working class", "Chinese people","Chinese nation", "core of leadership", "socialism", 
    "Chinese characteristics", "China's advanced productive forces", "China's advanced culture", 
    "the fundamental interests", "the overwhelming majority", "realization of communism", 
    "the highest ideal", "ultimate goal of the Party", "Marxism-Leninism", "Mao Zedong Thought", 
    "Deng Xiaoping Theory", "Three Represents"]
    let before=["white paper protest", "uyghur", "tattoo", "xinjiang", "guonan", "support hk", 
    "dictatorship", "winnie the pooh", "dalai lama", "june 4", "independence"]
    var outputtext
    for(let i =0; i<before.length; i++){
        if(inputtext.toLowerCase() == before[i]){
            outputtext = after[i];
            break;
        }else{
            outputtext = inputtext
        }
    }
    if(outputtext == inputtext){
        alert('The text you entered is not sensitive or has not been collected. Please see below for recorded sensitive words, or click "add to the list" to add the text to our list.')
    }
    var output = "<div class = 'result'>"
    output += `<p  style="font-size: 14pt;">${outputtext}</p>` + `</div>`
    console.log(output)
    msg.innerHTML = output
}

function submit2() {
    var inputtext = document.getElementById('fname').value;
    let before=["the communist party of china", "the vanguard",
    "chinese working class", "chinese people","chinese nation", "core of leadership", "socialism", 
    "chinese characteristics", "china's advanced productive forces", "china's advanced culture", 
    "the fundamental interests", "the overwhelming majority", "realization of communism", 
    "the highest ideal", "ultimate goal of the party", "marxism-leninism", "mao zedong thought", 
    "deng xiaoping theory", "three represents"]
    let after=["White Paper protest", "Uyghur", "Tattoo", "Xinjiang", "Guonan", "Support HK", 
    "Dictatorship", "Winnie the Pooh", "Dalai Lama", "June 4", "independence"]
    var outputtext
    for(let i =0; i<before.length; i++){
        if(inputtext.toLowerCase() == before[i]){
            if (after[i]==null){
                outputtext = inputtext
                break;
            }else{
                outputtext = after[i];
                break;
            }
        }else{
            outputtext = inputtext
        }
    }
    if(outputtext == inputtext){
        alert('The text you entered is not encrypted.')
    }
    var output = "<div class = 'result'>"
    output += `<p  style="font-size: 14pt;">${outputtext}</p>` + `</div>`
    console.log(output)
    msg.innerHTML = output
    

}

