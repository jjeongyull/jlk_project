

$(document).ready(function(){
    $('#header').load('common/header.html');
    $('#footer').load('common/footer.html');
    $(".loader").delay(1500).fadeOut("slow");
    $("#untree_co--overlayer").delay(1500).css({"top":"-100%"});	

    
});

$(window).scroll(function () {

    if ($(this).scrollTop() > 400) {
      $("header").addClass('header_filter');

    } else {
      $("header").removeClass('header_filter');
    }
});

var data_1 = '';
data_1 += '<div class="after"><i class="fa-solid fa-xmark"></i></div>'
data_1 += '<ul>'
data_1 += '<li>'
data_1 += '    <div class="pop_img_area popimg_1"></div>'
data_1 += '    <div class="pop_info_area">'
data_1 += '        <span class="pop_tit">*MEDIHUB STROKE (뇌졸중 토털 솔루션) </span>'
data_1 += '        <span class="pop_info">전주기적 뇌졸중 분석 솔루션으로, CT와 MRI 등 다양한 뇌 영상을 인공지능으로 분석하여 뇌졸중 진단에 도움을 주며, 뇌출혈 및 뇌경색 환자 분류, 치료 방침, 예후 예측 등을 제공하는 토털 솔루션 입니다. (*뇌경색 MR영상 분석 솔루션 JBS-01K: 2018년 인공지능 기반 의료 솔루션 국내 최초 3등급 식약처 인허가 획득, 2022년 5월 혁신의료기기로 지정)</span>'
data_1 += '    </div>'
data_1 += '</li>'
data_1 += '<li>'
data_1 += '    <div class="pop_img_area popimg_2"></div>'
data_1 += '    <div class="pop_info_area">'
data_1 += '        <span class="pop_tit">*MEDIHUB ANEURYSM (JBA-01K)<br>(뇌동맥류 분석 솔루션) – </span>'
data_1 += '        <span class="pop_info">환자의 뇌 MRA영상에서 인공지능으로뇌동맥류의 위치와 크기 정보, 변화 추이등을 분석하는 솔루션으로, 뇌동맥류의 조기 검출 및 치료방침에 대한 의료진의 결정을 보조합니다.'
data_1 += '        </span>'
data_1 += '    </div>'
data_1 += '</li>'
data_1 += '<li>'
data_1 += '    <div class="pop_img_area popimg_3"></div>'
data_1 += '    <div class="pop_info_area">'
data_1 += '        <span class="pop_tit">*MEDIHUB DEMENTIA (ATROSCAN) '
data_1 += '            (뇌 노화 및 치매 분석 솔루션) – '
data_1 += '            </span>'
data_1 += '        <span class="pop_info">MRI 영상에서 뇌 피질 두께를 분석하여 뇌 노화 및 치매 진행을 분석하는 솔루션인 ATROSCAN은, 인공지능 분석 결과 리포트까지 제공하여 국내/외 건강검진센터 등에서 사용되고 있습니다. ATROSCAN은 뇌를 62개 영역으로 세분화하고 각 영역에 뇌 위축도를 세밀하게 분석하여 정량적인 정보와 2D 및 3D 그래픽 제공을 통해 시각적인 정보까지 빠르게 제공하며 진료 효율을 제고하여 의료진과 환자들로부터 좋은 평가를 받고 있습니다.'
data_1 += '        </span>'
data_1 += '    </div>'
data_1 += '</li>'
data_1 += '</ul>'

innerhtml1 = data_1;

var data_2 = '';

data_2 += '<div class="after"><i class="fa-solid fa-xmark"></i></div>'
data_2 += '<ul>'
data_2 += '<li>'
data_2 += '    <div class="pop_img_area popimg_2_1"></div>'
data_2 += '    <div class="pop_info_area">'
data_2 += '        <span class="pop_tit">*MEDIHUB PROSTATE (전립선암 분석 솔루션) </span>'
data_2 += '        <span class="pop_info">전립선 MRI 영상을 인공지능으로 분석하여 전립선암 의심 영역을 검출하고, 다양한 MRI 영상을 한번에 보여주는 multi-sequential 뷰어 기능을 지원하는 솔루션입니다. 난이도가 높은 전립선암의 Targeted biopsy를 지원하며 의료진과 환자의 편의성을 제고할 수 있는 솔루션입니다.<br>(*미국 미주리대 임상 완료)</span>'
data_2 += '    </div>'
data_2 += '</li>'
data_2 += '<li>'
data_2 += '    <div class="pop_img_area popimg_2_2"></div>'
data_2 += '    <div class="pop_info_area">'
data_2 += '        <span class="pop_tit">*MEDIHUB CXR (폐 질환 분석 솔루션) –</span>'
data_2 += '        <span class="pop_info">인공지능으로 흉부 방사선 영상을 분석하여 결과를 heat map 형식으로 시각화하고 분석에 대한 정량적 정보를 제공하는 솔루션 입니다. 폐렴, 결핵 등과 같은 폐 병변 의심 영역에 대한 의료진의 판독을 보조하며, 경량화 기술을 활용하여 노트북이나 미니PC환경에서 분석이 가능합니다. 또한, 휴대용 x-ray 촬영 기기와의 연동을 통해 장소에 구애 받지 않고 사용이 가능한 제품입니다.'
data_2 += '        </span>'
data_2 += '    </div>'
data_2 += '</li>'
data_2 += '<li>'
data_2 += '    <div class="pop_img_area popimg_2_3"></div>'
data_2 += '    <div class="pop_info_area">'
data_2 += '        <span class="pop_tit">*MEDIHUB MAMMO (유방암 분석 솔루션)'
data_2 += '            </span>'
data_2 += '        <span class="pop_info">유방암은 종괴나 미세석회화 양상으로 민감하게 발견할 수 있는 검사 방법입니다. MEDIHUB MAMMO는 건강검진센터에서 진행되는 유방촬영술 영상을 인공지능으로 분석하여 크기가 매우 작아 놓치기 쉬운 유방 종괴 및 미세석회화의 존재 여부 및 위치 정보를 제공하는 솔루션입니다.  '
data_2 += '        </span>'
data_2 += '    </div>'
data_2 += '</li>'
data_2 += '<li>'
data_2 += '    <div class="pop_img_area popimg_2_4"></div>'
data_2 += '    <div class="pop_info_area">'
data_2 += '        <span class="pop_tit">*JDP Series (병리영상 분석 솔루션) –'
data_2 += '            </span>'
data_2 += '        <span class="pop_info">조직검사를 시행한 병리 영상으로부터 암을 더욱 정밀하게 진단 및 보조하여 암 세포의 등급을 제시해주는 디지털 병리 분석 솔루션 입니다. 다중 암 분석 솔루션과 유기적인 구동을 통해 향후 치료제 반응 예측 및 생존율 예측 등을 제공 할 예정입니다. <br>(*2021.04 디지털 병리 기반의 암 전문 AI 분석 솔루션 개발 사업 컨소시엄 선정 – 7개 대학병원 참여)'
data_2 += '        </span>'
data_2 += '    </div>'
data_2 += '</li>'
data_2 += '</ul>'

innerhtml2 = data_2;




function showImage(id){



    $(".bigPictureWrapper").css("visibility","visible");
    $(".bigPictureWrapper").css("opacity","1");
    $(".bigPicture").css("display","block");
    if(id == 1){
        $('.bigPicture').html(innerhtml1);
    }if(id == 2){
        $('.bigPicture').html(innerhtml2);
    }

    $(".after").on('click',function(){
        $(".bigPictureWrapper").css("visibility","hidden");
        $(".bigPictureWrapper").css("opacity","0");
        $(".bigPicture").css("display","none");
    });
    
}
  




