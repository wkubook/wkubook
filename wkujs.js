function downloadA() {
    var downloadfile = $('.urltxt').val();
    if (downloadfile.length <= 5) {
        alert("올바른 링크를 입력해주세요");
    } else {
    $('.makedl').html("<a type='video' href='http://123.108.18.41/player/cdncall.php?" + downloadfile + "' class='makedl2' download>링크가 생성되었습니다!<br>이곳을 마우스 오른쪽으로 클릭 후<br>다른 이름으로 저장을 눌러주세요<a>");
        //window.location.assign('http://123.108.18.41/player/cdncall.php?' + downloadfile);
    }
}
