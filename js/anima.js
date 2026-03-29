document.addEventListener('DOMContentLoaded', function(){

    // прелоудер
    const preloader = document.getElementById("preloader");
    const fill = document.querySelector(".preloader-fill");
    const percentText = document.querySelector(".preloader-percent");

    let progress = 0;

    const interval = setInterval(() => {
    progress += 2;

    fill.style.height = progress + "%";

    let displayPercent = Math.floor(progress / 10) * 10;
    percentText.textContent = displayPercent + "%";

    if (progress >= 100) {
        clearInterval(interval);

        setTimeout(() => {
        preloader.classList.add("hide");
        setTimeout(() => preloader.remove(), 600);
        }, 1000);
    }
    }, 30);


  // зелёные блоки убираются по клику, белые блоки исчезают по очереди, появляется грибоч
  const greens = Array.from(document.querySelectorAll('.Green'));

  const whiteOrder = [
    '.Line8', '.Line7', '.Line6', '.Line5', '.Line4', '.Line3', '.Line2', '.Line1'
  ].map(sel => document.querySelector(sel)).filter(Boolean);

  const grib = document.querySelector('.text_grib');

  greens.forEach(g => {
    g.addEventListener('click', () => {
      g.classList.add('hide');

      const allGreenHidden = greens.every(el => el.classList.contains('hide'));
      if (allGreenHidden) {
        hideWhitesOneByOne(whiteOrder, () => {
          if (grib) grib.classList.add('show');
        });
      }
    });
  });

function hideWhitesOneByOne(arr, onDone) {
  const step = 250;

  arr.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add('hide');
    }, i * step);
  });

  setTimeout(() => {
    if (typeof onDone === 'function') onDone();
  }, arr.length * step + 50);
}



// клик на гриб - он уменьшается
let mush_click = document.querySelector(".m1");
mush_click.addEventListener("click", function () {

    if (mush_click.src.includes("mush1.svg")) {
        mush_click.src = "img/m_click1.svg";
    } else {
        mush_click.src = "img/mush1.svg";
    }
});

let mush2_click = document.querySelector(".m2");
mush2_click.addEventListener("click", function () {

    if (mush2_click.src.includes("mush2.svg")) {
        mush2_click.src = "img/m_click2.svg";
    } else {
        mush2_click.src = "img/mush2.svg";
    }
});

let mush3_click = document.querySelector(".m3");
mush3_click.addEventListener("click", function () {

    if (mush3_click.src.includes("mush3.svg")) {
        mush3_click.src = "img/m_click3.svg";
    } else {
        mush3_click.src = "img/mush3.svg";
    }
});

let mush4_click = document.querySelector(".m4");
mush4_click.addEventListener("click", function () {

    if (mush4_click.src.includes("mush4.svg")) {
        mush4_click.src = "img/m_click4.svg";
    } else {
        mush4_click.src = "img/mush4.svg";
    }
});

let mush5_click = document.querySelector(".m5");
mush5_click.addEventListener("click", function () {

    if (mush5_click.src.includes("mush5.svg")) {
        mush5_click.src = "img/m_click5.svg";
    } else {
        mush5_click.src = "img/mush5.svg";
    }
});

// подключение звука для дисков
let disks_ = document.querySelectorAll(".disk");
let audio = document.querySelector(".full");

disks_.forEach(disk => {
    disk.addEventListener("click", function () {
        if (!audio.paused) {
            audio.pause();
        } else {
            audio.currentTime = 0;
            audio.play();
        }
    });
});

// при клике на зеленый блок plashka1.style.opacity = "0"
let green_el = document.querySelectorAll(".Green");
let pl1 = document.querySelector(".pl1_1");

green_el.forEach(function(el) {
    el.addEventListener("click", function() {
        pl1.style.opacity = "0";
    });
});


// подключение звуков по клику
  let clickSound1 = document.querySelector(".sound1");
    let m1_sound = document.querySelector(".m1");

    m1_sound.addEventListener("click", function() {
  if (clickSound1.paused) {
          clickSound1.currentTime = 0;
          clickSound1.play();
      } else {
          clickSound1.pause();
      }
    });

      let clickSound2 = document.querySelector(".sound2");
    let m2_sound = document.querySelector(".m2");

    m2_sound.addEventListener("click", function() {
         if (clickSound2.paused) {
        clickSound2.currentTime = 0;
        clickSound2.play();
    } else {
        clickSound2.pause();
    }
    });

          let clickSound3 = document.querySelector(".sound3");
    let m3_sound = document.querySelector(".m3");

    m3_sound.addEventListener("click", function() {
         if (clickSound3.paused) {
        clickSound3.currentTime = 0;
        clickSound3.play();
    } else {
        clickSound3.pause();
    }
    });

              let clickSound4 = document.querySelector(".sound4");
    let m4_sound = document.querySelector(".m4");

    m4_sound.addEventListener("click", function() {
         if (clickSound4.paused) {
        clickSound4.currentTime = 0;
        clickSound4.play();
    } else {
        clickSound4.pause();
    }
    });
              let clickSound5 = document.querySelector(".sound5");
    let m5_sound = document.querySelector(".m5");

    m5_sound.addEventListener("click", function() {
         if (clickSound5.paused) {
        clickSound5.currentTime = 0;
        clickSound5.play();
    } else {
        clickSound5.pause();
    }
    });

 
// при нажатии на напиток появляется плашка с текстом
const drinks = document.querySelectorAll(".drink");

drinks.forEach(function(drink){

    drink.addEventListener("click", function(){

        const number = drink.classList[1].replace("d", "");

        document.querySelectorAll(".a").forEach(function(img){
            img.classList.remove("active");
        });

        document.querySelector(".a" + number).classList.add("active");

    });

});

// при наведении на напиток менеятся цвет текста
const drinks_ = document.querySelectorAll(".drink");
const text1 = document.querySelector(".text3");
const text2 = document.querySelector(".text3_1");

drinks_.forEach(function(drink){

    drink.addEventListener("mouseenter", function(){
        text1.style.opacity = "0";
        text2.style.opacity = "1";
    });

    drink.addEventListener("mouseleave", function(){
        text1.style.opacity = "1";
        text2.style.opacity = "0";
    });

});

// тык на диск - нота
    const container = document.querySelector(".not_disk");
    const disks = document.querySelectorAll(".disk");
    const notes = document.querySelectorAll(".note");

    let noteIndex = 0;

    disks.forEach(function (disk) {
        disk.addEventListener("click", function () {
            const note = notes[noteIndex % notes.length];

            const containerRect = container.getBoundingClientRect();
            const diskRect = disk.getBoundingClientRect();

            const centerX = diskRect.left - containerRect.left + diskRect.width / 2;
            const centerY = diskRect.top - containerRect.top + diskRect.height / 2;

            const minRadius = diskRect.width / 2;
            const maxRadius = diskRect.width / 2 + 30;

            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * (maxRadius - minRadius) + minRadius;

            const x = centerX + Math.cos(angle) * distance;
            const y = centerY + Math.sin(angle) * distance;

            note.style.left = x + "px";
            note.style.top = y + "px";

            note.classList.remove("show");
            void note.offsetWidth;
            note.classList.add("show");

            noteIndex++;
        });
});

// при нажатии диск крутится 
const disk = document.querySelectorAll(".disk");
let angle = 0;

disk.forEach(function(disk){
    disk.addEventListener("click", function(){
  angle += 90;
  disk.style.transform = `rotate(${angle}deg)`;
});
})


// при скролле ветки уезжают в разные стороны
const v3 = document.querySelector(".v3");
const v4 = document.querySelector(".v4");

let current = 0;
let target = 0;
let scrollTimeout;


window.addEventListener("scroll", function () {

    clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(() => {

        const base = window.innerHeight;

        target = (window.scrollY / base) * 120;
        target = Math.min(target, 200);

    }, 3000);

}, { passive: true });

function animate() {
    current += (target - current) * 0.08;

    const screenWidth = window.innerWidth;

    const maxShift = screenWidth * 0.25;
    const maxShiftV4 = screenWidth * 0.2; 

    const shiftV3 = Math.min(current, maxShift);
    const shiftV4 = Math.min(current, maxShiftV4);

    v3.style.transform = `translate3d(${-shiftV3}px, 0, 0)`;
    v4.style.transform = `translate3d(${shiftV4}px, 0, 0)`;

    requestAnimationFrame(animate);
}

animate();

// при наведении на плашку меняется цвет заголовка
const ticket = document.querySelector(".ticket_form");
const header_grib = document.querySelector(".header_pass_img")
const header_grib2 = document.querySelector(".header_pass_img2")


ticket.addEventListener("mouseenter", function(){
    header_grib.style.opacity = "0";
    header_grib2.style.opacity = "1";
});


ticket.addEventListener("mouseleave", function(){
    header_grib.style.opacity = "1";
    header_grib2.style.opacity = "0";
});

// при наведении на плашку меняется цвет заголовка
const txt_list = document.querySelector(".list");
const header_grib_ = document.querySelector(".header_pass_img")
const header_grib2_ = document.querySelector(".header_pass_img2")


txt_list.addEventListener("mouseenter", function(){
    header_grib_.style.opacity = "0";
    header_grib2_.style.opacity = "1";
});


ticket.addEventListener("mouseleave", function(){
    header_grib_.style.opacity = "1";
    header_grib2_.style.opacity = "0";
});

// рейв буковки соединяем

const containerBukvi = document.querySelector(".bukvi");

const l1 = document.querySelector(".l1");
const l2 = document.querySelector(".l2");
const l3 = document.querySelector(".l3");
const l4 = document.querySelector(".l4");

const line1 = document.querySelector("#line1");
const line2 = document.querySelector("#line2");
const line3 = document.querySelector("#line3");

const R1 = document.querySelector(".R1");
const I1 = document.querySelector(".I1");
const E1 = document.querySelector(".E1");
const B1 = document.querySelector(".B1");

function getCenter(el) {
    const r = el.getBoundingClientRect();
    const c = containerBukvi.getBoundingClientRect();

    return {
        x: r.left - c.left + r.width / 2,
        y: r.top - c.top + r.height / 2
    };
}

function connect(el1, el2, line) {
    const p1 = getCenter(el1);
    const p2 = getCenter(el2);

    line.setAttribute("x1", p1.x);
    line.setAttribute("y1", p1.y);
    line.setAttribute("x2", p2.x);
    line.setAttribute("y2", p2.y);
}

function drawAllLines() {
    connect(l1, l2, line1);
    connect(l2, l3, line2);
    connect(l3, l4, line3);
}

function showMasks() {
    R1.classList.add("show-mask");
    I1.classList.add("show-mask");
    E1.classList.add("show-mask");
    B1.classList.add("show-mask");

    // скрываем старые буквы
    l1.classList.add("hide");
    l2.classList.add("hide");
    l3.classList.add("hide");
    l4.classList.add("hide");

     // меняем цвет линий
    line1.style.stroke = "#DE0004";
    line2.style.stroke = "#DE0004";
    line3.style.stroke = "#DE0004";

}

drawAllLines();
window.addEventListener("resize", drawAllLines);

let step = 0;

l1.addEventListener("click", function () {
    if (step === 0) {
        line1.classList.add("show");
        step = 1;
    }
});

l2.addEventListener("click", function () {
    if (step === 1) {
        line2.classList.add("show");
        step = 2;
    }
});

l3.addEventListener("click", function () {
    if (step === 2) {
        line3.classList.add("show");
        step = 3;
        showMasks();
    }
});



// подвал стираем 
const canvas = document.querySelector(".scratch-canvas");
const wrap = document.getElementById("basement");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = wrap.offsetWidth;
  canvas.height = wrap.offsetHeight;


  ctx.globalCompositeOperation = "source-over";
const topImage = new Image();
topImage.src = "./img/background_basement.svg";

function resizeCanvas() {
  canvas.width = wrap.offsetWidth;
  canvas.height = wrap.offsetHeight;

  ctx.globalCompositeOperation = "source-over";

  ctx.drawImage(topImage, 0, 0, canvas.width, canvas.height);
}


topImage.onload = () => {
  resizeCanvas();
};
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let isDrawing = false;

function getPos(e) {
  const rect = canvas.getBoundingClientRect();

  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  const clientY = e.touches ? e.touches[0].clientY : e.clientY;

  return {
    x: clientX - rect.left,
    y: clientY - rect.top
  };
}

function erase(x, y) {
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 80, 0, Math.PI * 2);
    ctx.fill();
}

canvas.addEventListener("mousedown", () => {
  isDrawing = true;
});

canvas.addEventListener("mouseup", () => {
  isDrawing = false;
});

canvas.addEventListener("mouseleave", () => {
  isDrawing = false;
});

canvas.addEventListener("mousemove", (e) => {
  if (!isDrawing) return;
  const pos = getPos(e);
  erase(pos.x, pos.y);
});

canvas.addEventListener("touchstart", () => {
  isDrawing = true;
}, { passive: true });

canvas.addEventListener("touchend", () => {
  isDrawing = false;
});

canvas.addEventListener("touchmove", (e) => {
  if (!isDrawing) return;
  e.preventDefault();
  const pos = getPos(e);
  erase(pos.x, pos.y);
}, { passive: false });



 // летающие буквы
setTimeout(() => {
    if (typeof Matter === 'undefined') {
        console.error('Matter.js не загрузился');
        return;
    }
    const { Engine, Runner, Bodies, Body, World, Events } = Matter;

    const screen = document.getElementById('first_screen');
    const screenRect = screen.getBoundingClientRect();
    const W = screenRect.width;
    const H = screenRect.height;

    const engine = Engine.create();
    engine.gravity.y = -0.4;

    const letterEls = Array.from(document.querySelectorAll('.letters img'));
    const letterH = letterEls[0].getBoundingClientRect().height;

    const bodies = letterEls.map(el => {
        const rect = el.getBoundingClientRect();
        const x = rect.left - screenRect.left + rect.width / 2;
        const y = rect.top - screenRect.top + rect.height / 2;

        return Bodies.rectangle(x, y, rect.width * 0.85, rect.height * 0.85, {
            restitution: 0.6,
            friction: 0.05,
            frictionAir: 0.015,
            label: 'letter'
        });
    });

    const wallThick = 50;
    const offset = window.innerWidth * 0.015;
    const wallTop    = Bodies.rectangle(W / 2, offset + wallThick / 2, W, wallThick, { isStatic: true });
    const wallLeft   = Bodies.rectangle(-wallThick / 2, H / 2, wallThick, H * 2, { isStatic: true });
    const wallRight  = Bodies.rectangle(W + wallThick / 2, H / 2, wallThick, H * 2, { isStatic: true });
    const wallBottom = Bodies.rectangle(W / 2, H + wallThick / 2, W, wallThick, { isStatic: true });

    World.add(engine.world, [...bodies, wallTop, wallLeft, wallRight, wallBottom]);

    bodies.forEach(body => {
        Body.applyForce(body, body.position, {
            x: (Math.random() - 0.5) * 0.05,
            y: -Math.random() * 0.02
        });
    });

    screen.style.position = 'relative';
    letterEls.forEach((el) => {
        const rect = el.getBoundingClientRect();
        el.style.position = 'absolute';
        el.style.left = (rect.left - screenRect.left) + 'px';
        el.style.top  = (rect.top - screenRect.top) + 'px';
        el.style.margin = '0';
        el.style.transition = 'none';
        el.style.cursor = 'pointer';
    });

    document.querySelector('.letters').style.display = 'contents';

// клик в любом месте — буквы разлетаются
    screen.addEventListener('click', (e) => {
    console.log('клик сработал!', e.clientX, e.clientY);
    const freshRect = screen.getBoundingClientRect();
    const clickX = e.clientX - freshRect.left;
    const clickY = e.clientY - freshRect.top;

    bodies.forEach((body) => {
        const dx = body.position.x - clickX;
        const dy = body.position.y - clickY;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const force = 2 / dist;

    Body.applyForce(body, body.position, {
        x: (dx / dist) * force,
        y: (dy / dist) * force + 0.015
    });
    });
});

    const runner = Runner.create();
    Runner.run(runner, engine);

    setTimeout(() => {
        engine.gravity.y = 0;
    }, 2000);

    Events.on(engine, 'afterUpdate', () => {
        letterEls.forEach((el, i) => {
            const pos = bodies[i].position;
            const angle = bodies[i].angle;
            el.style.left      = (pos.x - el.offsetWidth / 2) + 'px';
            el.style.top       = (pos.y - el.offsetHeight / 2) + 'px';
            el.style.transform = `rotate(${angle}rad)`;
        });
    });

    setInterval(() => {
        bodies.forEach(body => {
            Body.applyForce(body, body.position, {
                x: (Math.random() - 0.5) * 0.004,
                y: (Math.random() - 0.5) * 0.002
            });
        });
    }, 2000);

}, 3000);

// анимация текста pl1
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 1 });

observer.observe(document.querySelector('.pl1'));

// анимация текста pl2
const observer2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer2.unobserve(entry.target);
        }
    });
}, { threshold: 1 });

observer2.observe(document.querySelector('.pl2'));

// анимация текста pl3
const observer3 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer3.unobserve(entry.target);
        }
    });
}, { threshold: 1 });

observer3.observe(document.querySelector('.pl3'));

// при наведении на текст 1 - он исчезает
let txt1_tap = document.querySelector(".plash1");
let txt = document.querySelector(".text1");

txt1_tap.addEventListener("click", function () {
    txt1_tap.style.opacity = "0";
    txt.style.opacity = "0";
});

// txt1_tap.addEventListener("mouseenter", function () {
//     txt1_tap.style.opacity = "0";
// });

// при click на текст 1 - он исчезает
let txt1_enter = document.querySelector(".pl1");

txt1_enter.addEventListener("click", function () {
    txt1_enter.style.opacity = "0";
});



});