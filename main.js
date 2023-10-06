Maan_meri_jaan = "";
Mahiye_jinna_sona = "";


function setup(){
    canvas = createCanvas(600,530);
    canvas.position(420,190);
    background("pink");

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    Image(video,0,0,600,530);
}

function preload()
{
    Maan_meri_jaan = loadSound("MAAN MERI JAAN + AFTERLIFE.mp3");
    Mahiye_jinna_sona = loadSound("Mahiye Jinna Sohna(PagalWorld.com.se).mp3")
}