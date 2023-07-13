(function init() {
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },

    pinType: document.querySelector("#main").style.transform ? "transform" : "initial"
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
  const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
  });
})();








var clutter = "";
document.querySelector('#talacap').textContent.split(" ").forEach(function (dets) {
  clutter += `<span> ${dets} </span>`


  document.querySelector("#talacap").innerHTML = clutter;
})

gsap.from("#talacap>span", {
  stagger: .2,
  marginLeft: -100,
  opacity: 0,
})


gsap.from("#page1-bottom>h1", {
  stagger: .2,
  marginTop: 500,
  opacity: 0,
  duration: 2
})


gsap.from("#page1-bottom>h4", {
  stagger: .2,
  marginTop: 500,
  opacity: 0,
  duration: 2,
  delay: 1
})



gsap.to('#page2>img', {
  scrollTrigger: {
    trigger: `#page2`,
    scroller: `#main`,
    start: `top top`,
    end: `bottom 50%`,
    scrub: 1,

  },
  scale: 1.1,
})


gsap.to('#page3 h1', {
  duration: 1,
  opacity: 1,
  rotateX: 0,
  scrollTrigger: {
    trigger: '#page3 ',
    scroller: '#main',
    scrub: 2,
    end: 'bottom 85%',
    //   markers:true,
    start: '10% 60%',

  },
})


gsap.to('#page4 #page4-part0 #line', {
  duration: 1,

  width: "80vw",
  scrollTrigger: {
    trigger: '#page4 ',
    scroller: '#main',
    scrub: 2,
    end: '70% 85%',
    //   markers:true,
    start: '10% 60%',

  },
})

var mangocard = document.querySelector('.mangocard');

document.querySelector('#page4-part1 h1').addEventListener('mouseenter', function (dets) {
  mangocard.style.opacity = 1;
  mangocard.style.transform = `translate(-50%,-50%) rotate(20deg)`;
  mangocard.style.left = `40%`
})
document.querySelector('#page4-part1').addEventListener('mousemove', function (dets) {
  mangocard.style.left = `${dets.x}px`
})
document.querySelector('#page4-part1').addEventListener('mouseleave', function (dets) {
  mangocard.style.opacity = 0;
  mangocard.style.transform = `translate(-50%,-50%) rotate(0deg)`;
  mangocard.style.left = `20%`
})

var bananacard = document.querySelector('.bananacard');
document.querySelector('#page4-part2 h1').addEventListener('mouseenter', function (dets) {
  bananacard.style.opacity = 1;
  bananacard.style.transform = `translate(-50%,-50%) rotate(20deg)`;
  bananacard.style.left = `40%`
})
document.querySelector('#page4-part2').addEventListener('mousemove', function (dets) {
  bananacard.style.left = `${dets.x}px`
})
document.querySelector('#page4-part2').addEventListener('mouseleave', function (dets) {
  bananacard.style.opacity = 0;
  bananacard.style.transform = `translate(-50%,-50%) rotate(0deg)`;
  bananacard.style.left = `20%`
})

var pinecard = document.querySelector('.pinecard');
document.querySelector('#page4-part3 h1').addEventListener('mouseenter', function (dets) {
  pinecard.style.opacity = 1;
  pinecard.style.transform = `translate(-50%,-50%) rotate(20deg)`;
  pinecard.style.left = `40%`
})
document.querySelector('#page4-part3').addEventListener('mousemove', function (dets) {
  pinecard.style.left = `${dets.x}px`
})
document.querySelector('#page4-part3').addEventListener('mouseleave', function (dets) {
  pinecard.style.opacity = 0;
  pinecard.style.transform = `translate(-50%,-50%) rotate(0deg)`;
  pinecard.style.left = `20%`
})

var pithayacard = document.querySelector('.pithayacard');

document.querySelector('#page4-part4 h1').addEventListener('mouseenter', function (dets) {
  pithayacard.style.opacity = 1;
  pithayacard.style.transform = `translate(-50%,-50%) rotate(20deg)`;
  pithayacard.style.left = `40%`;
})
document.querySelector('#page4-part4').addEventListener('mousemove', function (dets) {

  pithayacard.style.left = `${dets.x}px`;
})
document.querySelector('#page4-part4').addEventListener('mouseleave', function (dets) {
  pithayacard.style.opacity = 0;
  pithayacard.style.transform = `translate(-50%,-50%) rotate(0deg)`;
  pithayacard.style.left = `20%`;
})


gsap.to('#page6 img', {
  rotate: 360,
  repeat: -1,
  duration: 2.5,
  ease: 'linear'
})

document.querySelectorAll('#page7 .page7-box h1').forEach(element => {
  gsap.to(element, {
    transform: `translateX(-96%)`,
    ease: 'linear',
    duration: 4,
    scrollTrigger: {
      trigger: `#page7`,
      scroller: `#main`,
      // markers:true,
      scrub: 3,


    }
  })
});
document.querySelectorAll('#page7 .page7-box2 h1').forEach(element => {
  gsap.to(element, {
    transform: `translateX(0%)`,
    ease: 'linear',
    duration: 4,
    scrollTrigger: {
      trigger: `#page7`,
      scroller: `#main`,

      scrub: 3,

    }
  })
});

var ycard = document.querySelector('.y');

document.querySelector('#page8y ').addEventListener('mouseenter', function (dets) {
  ycard.style.opacity = 1;

})
document.querySelector('#page8y').addEventListener('mousemove', function (dets) {
  ycard.style.top = `${dets.y - 250}px`;
  ycard.style.left = `${dets.x - 50}px`;
})
document.querySelector('#page8y').addEventListener('mouseleave', function (dets) {
  ycard.style.opacity = 0;


})



var ncard = document.querySelector('.n');

document.querySelector('#page8n').addEventListener('mouseenter', function (dets) {
  ncard.style.opacity = 1;

})
document.querySelector('#page8n').addEventListener('mousemove', function (dets) {

  ncard.style.top = `${dets.y - 250}px`;
  ncard.style.left = `${dets.x - 650}px`;
})
document.querySelector('#page8n').addEventListener('mouseleave', function (dets) {
  ncard.style.opacity = 0;

})