function aggiornaOrologio() {
  let ora = new Date();
  let ore = ora.getHours() % 12;
  let minuti = ora.getMinutes();
  let secondi = ora.getSeconds();

  let rotazioneOre = ore * 30 + minuti / 2;
  //ogni orologio ha 360 gradi → 360° / 12 = 30° per ora. Quindi moltiplicando 30 all'ora (tipo le 3), si arriva a dove si posizione la lancetta , + i minuti
  let rotazioneMinuti = minuti * 6;
  let rotazioneSecondi = secondi * 6;

  let ruotaOre = document.getElementById("ore");
  ruotaOre.style.transform = `translate(-50%, -50%) rotate(${rotazioneOre}deg)`;
  /*translate(-50%, -50%) = Centra la lancetta rispetto al centro dell'orologio.*/
  let ruotaMinuti = document.getElementById("minuti");
  ruotaMinuti.style.transform = `translate(-50%, -50%) rotate(${rotazioneMinuti}deg)`;

  let ruotaSecondi = document.getElementById("secondi");
  ruotaSecondi.style.transform = `translate(-50%, -50%) rotate(${rotazioneSecondi}deg)`;
}

setInterval(aggiornaOrologio, 1000);
aggiornaOrologio();
