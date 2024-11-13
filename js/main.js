console.log("this is consol");

document.addEventListener("DOMContentLoaded", function () {
    fetch('content/content.json')
        .then(response => response.json())
        .then(data => {
            console.log("this is data", data);
            console.log(data.menu.menu1);

            showData(data)


        })
        .catch(error => console.error("Error fetching JSON data:", error));
});

function showData(data) {

    // Navbar Menu
    document.getElementById('menu1').textContent = data.menu.menu1
    document.getElementById('menu2').textContent = data.menu.menu2
    document.getElementById('menu3').textContent = data.menu.menu3
    // document.getElementById('menu4').textContent = data.menu.menu4
    // document.getElementById('menu5').textContent = data.menu.menu5

    // Jumbotron Menu
    //jum left
    document.getElementById('jum1tit1').textContent = data.jumbotron.jumbotron1.title1
    document.getElementById('jum1tit2').textContent = data.jumbotron.jumbotron1.title2
    document.getElementById('jum1par1').textContent = data.jumbotron.jumbotron1.para1
    document.getElementById('jum1par2').textContent = data.jumbotron.jumbotron1.para2
    // document.getElementById('jum1link').href = data.jumbotron.jumbotron1.link
    // document.getElementById('jum1link').textContent = data.jumbotron.jumbotron1.btcap

    //jum center
    // document.getElementById('jum2tit1').textContent = data.jumbotron.jumbotron2.title1
    // document.getElementById('jum2tit2').textContent = data.jumbotron.jumbotron2.title2
    // document.getElementById('jum2par1').textContent = data.jumbotron.jumbotron2.para1
    // document.getElementById('jum2par2').textContent = data.jumbotron.jumbotron2.para2
    // document.getElementById('jum2link').href = data.jumbotron.jumbotron2.link
    // document.getElementById('jum2link').textContent = data.jumbotron.jumbotron2.btcap

    //jum right
    // document.getElementById('jum3tit1').textContent = data.jumbotron.jumbotron3.title1
    // document.getElementById('jum3tit2').textContent = data.jumbotron.jumbotron3.title2
    // document.getElementById('jum3par1').textContent = data.jumbotron.jumbotron3.para1
    // document.getElementById('jum3par2').textContent = data.jumbotron.jumbotron3.para2
    // document.getElementById('jum3link').href = data.jumbotron.jumbotron3.link
    // document.getElementById('jum3link').textContent = data.jumbotron.jumbotron3.btcap

    //Section 1
    document.getElementById('sec1titl').textContent = data.section.section1.title
    document.getElementById('sec1desc').textContent = data.section.section1.desc
    document.getElementById('s1c1titl').textContent = data.section.section1.content1.title
    document.getElementById('s1c1desc').textContent = data.section.section1.content1.desc
    document.getElementById('s1c2titl').textContent = data.section.section1.content2.title
    document.getElementById('s1c2desc').textContent = data.section.section1.content2.desc
    document.getElementById('s1c3titl').textContent = data.section.section1.content3.title
    document.getElementById('s1c3desc').textContent = data.section.section1.content3.desc


    //sec 1.5
    // document.getElementById('sec1n5titl').textContent = data.section.section1n5.title
    // document.getElementById('sec1n5desc').textContent = data.section.section1n5.desc
    // document.getElementById('sec1n5link').href = data.section.section1n5.link
    // document.getElementById('sec1n5link').textContent = data.section.section1n5.textlink


    //Section 2
    document.getElementById('sec2titl').textContent = data.section.section2.title
    document.getElementById('sec2desc').textContent = data.section.section2.desc
    document.getElementById('s2c1titl').textContent = data.section.section2.content1.title
    document.getElementById('s2c1desc').textContent = data.section.section2.content1.desc
    document.getElementById('s2c2titl').textContent = data.section.section2.content2.title
    document.getElementById('s2c2desc').textContent = data.section.section2.content2.desc
    document.getElementById('s2c3titl').textContent = data.section.section2.content3.title
    document.getElementById('s2c3desc').textContent = data.section.section2.content3.desc
    document.getElementById('s2c4titl').textContent = data.section.section2.content4.title
    document.getElementById('s2c4desc').textContent = data.section.section2.content4.desc

     //Section 3
    // document.getElementById('s3c1titl').textContent = data.section.section3.content1.title
    // document.getElementById('s3c1desc').textContent = data.section.section3.content1.desc
    // document.getElementById('s3c2titl').textContent = data.section.section3.content2.title
    // document.getElementById('s3c2desc').textContent = data.section.section3.content2.desc
    // document.getElementById('s3c3titl').textContent = data.section.section3.content3.title
    // document.getElementById('s3c3desc').textContent = data.section.section3.content3.desc
    // document.getElementById('s3c4titl').textContent = data.section.section3.content4.title
    // document.getElementById('s3c4desc').textContent = data.section.section3.content4.desc
    // document.getElementById('s3c5titl').textContent = data.section.section3.content5.title
    // document.getElementById('s3c5desc').textContent = data.section.section3.content5.desc
    // document.getElementById('s3c6titl').textContent = data.section.section3.content6.title
    // document.getElementById('s3c6desc').textContent = data.section.section3.content6.desc
    // document.getElementById('s3c7titl').textContent = data.section.section3.content7.title
    // document.getElementById('s3c7desc').textContent = data.section.section3.content7.desc


    // section 4
    // document.getElementById('sec4titl').textContent = data.section.section4.title
    // document.getElementById('sec4desc').textContent = data.section.section4.desc
    // document.getElementById('mport1').setAttribute('data-filter',data.section.section4.menu.m1.filter)
    // document.getElementById('mport1').textContent = data.section.section4.menu.m1.text
    // document.getElementById('mport2').setAttribute('data-filter',data.section.section4.menu.m2.filter)
    // document.getElementById('mport2').textContent = data.section.section4.menu.m2.text
    // document.getElementById('mport3').setAttribute('data-filter',data.section.section4.menu.m3.filter)
    // document.getElementById('mport3').textContent = data.section.section4.menu.m3.text
    // document.getElementById('mport4').setAttribute('data-filter',data.section.section4.menu.m4.filter)
    // document.getElementById('mport4').textContent = data.section.section4.menu.m4.text
    // document.getElementById('mport5').setAttribute('data-filter',data.section.section4.menu.m5.filter)
    // document.getElementById('mport5').textContent = data.section.section4.menu.m5.text
    // document.getElementById('mport6').setAttribute('data-filter',data.section.section4.menu.m6.filter)
    // document.getElementById('mport6').textContent = data.section.section4.menu.m6.text

    // pict
    // document.getElementById('con1').className += ' '+data.section.section4.pict.p1.tag
    // document.getElementById('img1').src = data.section.section4.pict.p1.src
    // document.getElementById('tit1').textContent = data.section.section4.pict.p1.ttl
    // document.getElementById('sub1').textContent = data.section.section4.pict.p1.sub

    // document.getElementById('con2').className += ' '+data.section.section4.pict.p2.tag
    // document.getElementById('img2').src = data.section.section4.pict.p2.src
    // document.getElementById('tit2').textContent = data.section.section4.pict.p2.ttl
    // document.getElementById('sub2').textContent = data.section.section4.pict.p2.sub

    // document.getElementById('con3').className += ' '+data.section.section4.pict.p3.tag
    // document.getElementById('img3').src = data.section.section4.pict.p3.src
    // document.getElementById('tit3').textContent = data.section.section4.pict.p3.ttl
    // document.getElementById('sub3').textContent = data.section.section4.pict.p3.sub

    // document.getElementById('con4').className += ' '+data.section.section4.pict.p4.tag
    // document.getElementById('img4').src = data.section.section4.pict.p4.src
    // document.getElementById('tit4').textContent = data.section.section4.pict.p4.ttl
    // document.getElementById('sub4').textContent = data.section.section4.pict.p4.sub

    // document.getElementById('con5').className += ' '+data.section.section4.pict.p5.tag
    // document.getElementById('img5').src = data.section.section4.pict.p5.src
    // document.getElementById('tit5').textContent = data.section.section4.pict.p5.ttl
    // document.getElementById('sub5').textContent = data.section.section4.pict.p5.sub

    // document.getElementById('con6').className += ' '+data.section.section4.pict.p6.tag
    // document.getElementById('img6').src = data.section.section4.pict.p6.src
    // document.getElementById('tit6').textContent = data.section.section4.pict.p6.ttl
    // document.getElementById('sub6').textContent = data.section.section4.pict.p6.sub

    // document.getElementById('con7').className += ' '+data.section.section4.pict.p7.tag
    // document.getElementById('img7').src = data.section.section4.pict.p7.src
    // document.getElementById('tit7').textContent = data.section.section4.pict.p7.ttl
    // document.getElementById('sub7').textContent = data.section.section4.pict.p7.sub

    // document.getElementById('con8').className += ' '+data.section.section4.pict.p8.tag
    // document.getElementById('img8').src = data.section.section4.pict.p8.src
    // document.getElementById('tit8').textContent = data.section.section4.pict.p8.ttl
    // document.getElementById('sub8').textContent = data.section.section4.pict.p8.sub

    // document.getElementById('con9').className += ' '+data.section.section4.pict.p9.tag
    // document.getElementById('img9').src = data.section.section4.pict.p9.src
    // document.getElementById('tit9').textContent = data.section.section4.pict.p9.ttl
    // document.getElementById('sub9').textContent = data.section.section4.pict.p9.sub
    

    // section5
    document.getElementById('sec5titl').textContent = data.section.section5.title
    document.getElementById('sec5desc').textContent = data.section.section5.desc
    document.getElementById('ip1').src = data.section.section5.img.ip1
    document.getElementById('ip2').src = data.section.section5.img.ip2
    document.getElementById('ip3').src = data.section.section5.img.ip3
    document.getElementById('ip4').src = data.section.section5.img.ip4
    document.getElementById('ip5').src = data.section.section5.img.ip5

    //section 6
    document.getElementById('sec6titl').textContent = data.section.section6.title
    document.getElementById('sec6desc').textContent = data.section.section6.desc
    document.getElementById('sec6text').textContent = data.section.section6.menu.left.text
    // document.getElementById('ltitle').textContent = data.section.section6.menu.left.title
    // document.getElementById('addr').innerHTML = data.section.section6.menu.left.address
    // document.getElementById('phone').innerHTML = data.section.section6.menu.left.phone
    // document.getElementById('fax').innerHTML = data.section.section6.menu.left.fax
    // document.getElementById('mail').innerHTML = data.section.section6.menu.left.mail

    //section 7
    // document.getElementById('sec7titl').textContent = data.section.section7.title
    // document.getElementById('sec7desc').textContent = data.section.section7.desc
    // document.getElementById('lfb').href = data.section.section7.link.lfb
    // document.getElementById('ltw').href = data.section.section7.link.ltw
    // document.getElementById('lgo').href = data.section.section7.link.lgo
    // document.getElementById('lpi').href = data.section.section7.link.lpi
    // document.getElementById('ltu').href = data.section.section7.link.ltu
    // document.getElementById('ldr').href = data.section.section7.link.ldr
 
    //footer
    //left
    document.getElementById('imgleft').src = data.footer.left.pict
    document.getElementById('textleft').textContent = data.footer.left.text
   //center
    // document.getElementById('titlecenter').textContent = data.footer.center.title
    document.getElementById('link1').href = data.footer.center.map.link1.link
    document.getElementById('link1').textContent = data.footer.center.map.link1.text
    document.getElementById('link2').href = data.footer.center.map.link2.link
    document.getElementById('link2').textContent = data.footer.center.map.link2.text
    document.getElementById('link3').href = data.footer.center.map.link3.link
    document.getElementById('link3').textContent = data.footer.center.map.link3.text
    document.getElementById('link4').href = data.footer.center.map.link4.link
    document.getElementById('link4').textContent = data.footer.center.map.link4.text

    document.getElementById('bmail').textContent = data.footer.address.ma
    document.getElementById('bphone').textContent = data.footer.address.ph
    document.getElementById('baddr').textContent = data.footer.address.ad

    document.getElementById('cop').textContent = data.footer.bott.copy
    document.getElementById('ter').textContent = data.footer.bott.tertext
    document.getElementById('ter').href = data.footer.bott.terlink
    document.getElementById('priv').textContent = data.footer.bott.privtext
    document.getElementById('priv').href = data.footer.bott.privlink


    // document.getElementById('loc').src = data.footer.address.location


//right
// document.getElementById('titleright').textContent = data.footer.right.title
// document.getElementById('buttontext').textContent = data.footer.right.bt
// document.getElementById('textright').textContent = data.footer.right.text


}

