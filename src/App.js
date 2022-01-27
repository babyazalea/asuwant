import { Component } from "react";
// import axios from "axios";

import Layout from "./components/UI/Layout";
import Loading from "./components/UI/Loading";
import Tiles from "./components/Tiles/Tiles";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      articles: [
        {
          source: {
            id: null,
            name: "Mksports.co.kr",
          },
          author: "매일경제",
          title:
            "‘벤투호 상대’ 레바논 전 득점왕, 코로나 양성 반응 [카타르월드컵] - MK스포츠 - 매일경제",
          description:
            "세계랭킹 95위 레바논이 33위 한국과 2022 국제축구연맹(FIFA) 카타르월드컵 아시아 최종예선 홈경기를 앞두고 코로나19 확진 선수가 나왔다.  레바논축구협회는 27일 오전(이하 한국시간) “모하마드 하이다르(33·아헤드)가 코로나19 양성",
          url: "https://mksports.co.kr/view/2022/81364/",
          urlToImage:
            "https://file.mk.co.kr/meet/neds/2022/01/image_readtop_2022_81364_16432430674930501.jpg",
          publishedAt: "2022-01-27T00:24:27Z",
          content:
            "95 33 2022 (FIFA) 19 .\r\n27 ( ) (33·) 19 . 1 2012 , 2013·2016 MVP, 2016 .\r\n(53·) 27 11 7 . 4 2 +6 14 A 2, 1 2 3 –2 5 4 .\r\nA·B 1~2 . 3 AFC . AFC (CONMEBOL) 5 1 .\r\n4 A 3 (6) 8 . AFC .\r\n[ MK ][ &amp; mk.… [+7 chars]",
        },

        {
          source: {
            id: null,
            name: "Thelec.kr",
          },
          author: "장경윤 기자",
          title:
            "삼성전자, 2021년 영업익 전년대비 '43%' 껑충…전 사업 호조세 - 디일렉",
          description:
            "삼성전자가 반도체 분야의 첨단공정 확대, 프리미엄 스마트폰 및 가전 제품 판매 증대로 지난해 4분기 호실적을 기록했다. 올해 역시 글로벌 IT 수요가 회복된다는 전망에 따라 각 사업에서 시장 리더십 및 첨단 기술력 확보에 주력할 계획이다.27일 삼성전자는 연결 기준으로 매출 76.57조원, 영업이익 13.87조원의 2021년 4분기 실적을 발표했다. 이로써 삼성전자는 2021년 4개 분기 모두 해당 분기 최대 매출을 기록하게 됐다.연간 기준으로도 역대 최대 매…",
          url: "http://www.thelec.kr/news/articleView.html?idxno=15872",
          urlToImage:
            "http://www.thelec.kr/news/thumbnail/202201/15872_14274_59_v150.jpg",
          publishedAt: "2022-01-27T00:18:28Z",
          content:
            "4 76.57, 13.87 2022 IT , · 48.2 43.6, 2.6\r\n , 4 .  IT .\r\n27   76.57, 13.87 2021 4  .  2021 4 .\r\n . 2021   279.6, 51.63 18.1%, 43.5% .\r\n4 76.57, , TV· 3.5%, 24.4% .\r\n4 13.87, 18.1% . , 1.95 . .\r\n  4 2… [+273 chars]",
        },

        {
          source: {
            id: null,
            name: "Chosun.com",
          },
          author: "조선비즈",
          title:
            "LG엔솔 코스피 상장… 권영수 “새로운 100년 위한 출발점” - 조선비즈 - 조선비즈",
          description: "LG엔솔 코스피 상장 권영수 새로운 100년 위한 출발점",
          url: "https://biz.chosun.com/industry/company/2022/01/27/BTJYZ3U3UBHBHICROWUZSIG3NY/",
          urlToImage:
            "https://biz.chosun.com/resizer/DhVPA-UsXPi2h-rvMQq6wiIlFB0=/1200x630/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosunbiz/APCGWKWNDNAFLEQNK72VZRGBLA.jpg",
          publishedAt: "2022-01-27T00:17:00Z",
          content: null,
        },

        {
          source: {
            id: null,
            name: "Mk.co.kr",
          },
          author: "매일경제",
          title: "코스피 장 초반 소폭 상승세…2,720대 - 매일경제",
          description:
            "코스피가 27일 장 초반 소폭 상승하며 2,720대로 올라섰다.    이날 오전 9시 3분 현재 코스피는 전날보다 13.62포인트(0.50%) 오른 2,722.86이다.    지수는 2,709.24로 보합 출발해 오르고 있다.    같은 시간 코스닥지수는 전날보다 0",
          url: "https://www.mk.co.kr/news/economy/view/2022/01/81266/",
          urlToImage:
            "https://file.mk.co.kr/meet/yonhap/2022/01/27/image_readtop_2022_81266_0_090811.jpg",
          publishedAt: "2022-01-27T00:07:27Z",
          content:
            "27 2,720 .\r\n9 3 13.62(0.50%) 2,722.86.\r\n2,709.24 .\r\n0.88(0.10%) 882.97.\r\n[]\r\nCopyrights .",
        },

        {
          source: {
            id: null,
            name: "Zdnet.co.kr",
          },
          author: null,
          title:
            "크라이텍, 크라이시스4 개발 확정...짧은 티저 영상도 공개 - ZD넷 코리아",
          description:
            "크라이텍이 FPS 게임 크라이시스 시리즈 최신작 크라이시스4 개발을 확정했다고 미국 게임매체 폴리곤이 26일(현지시간) 보도했다.크라이텍의 애브니 예리 대표는 크라이시스 ...",
          url: "https://zdnet.co.kr/view/?no=20220127084554",
          urlToImage:
            "https://image.zdnet.co.kr/2022/01/27/783510cf1974e82bdea6e33039d09901.png",
          publishedAt: "2022-01-26T23:52:34Z",
          content:
            'FPS 4 26() .\r\n " . " .\r\n " . " " ,   " .\r\n4 .\r\n4 . \'4\' .\r\n (EA) 2007 3 FPS .   SF SF .',
        },

        {
          source: {
            id: null,
            name: "Ajunews.com",
          },
          author: "이동훈",
          title:
            "정기 총회 연 KGA 항저우 아시안게임 프로·아마 혼합 - 아주경제_모바일",
          description:
            "이중명 대한골프협회 회장 [사진=대한골프협회]대한골프협회(KGA)가 2022 항저우 아시안게임 출전 방식을 발표했다. 프로와 아마추어가 2명씩 혼합된다.2022 KGA 정기총회가 ...",
          url: "https://www.ajunews.com/view/20220127082649430",
          urlToImage:
            "https://image.ajunews.com/content/image/2022/01/27/20220127082808428775.jpg",
          publishedAt: "2022-01-26T23:35:58Z",
          content:
            '[=]\r\n(KGA) 2022 . 2 .2022 KGA 1 26 . \r\n2022 19 () 6 2021 .\r\n() .\r\nKGA "2020 , . 9 " . " " .\r\n(OCA) .\r\n4, 3 , · 2, 1, 2 .\r\n.\r\n2018 - . (), (, , ) . , (, , , ) .\r\n, . , ( ). \r\n27( 5, 9, 13) .\r\n: , , , … [+50 chars]',
        },

        {
          source: {
            id: null,
            name: "Mt.co.kr",
          },
          author: "김지선",
          title:
            "'유퀴즈' 이말년 \"유튜브 수익? 웹툰 때의 N배…쉬운 길 찾은 느낌\" - 머니투데이",
          description:
            "웹툰 작가이자 유튜버 이말년이 유튜브 수익이 웹툰할때의 N배라고 밝혔다.지난 26일에 방송된 tvN &quot;유 퀴즈 온 더 블럭&quot;(이하 &quot;유퀴즈&q...",
          url: "https://news.mt.co.kr/mtview.php?no=2022012707412064419",
          urlToImage:
            "https://thumb.mt.co.kr/21/2022/01/2022012707412064419_1.jpg",
          publishedAt: "2022-01-26T23:30:12Z",
          content:
            'N .26 tvN \' \'( \'\') .\r\n" . 4 1 , 2 " " . Y " .\r\n" . . " .\r\n"3 " " . " . \r\n" . . . N " .\r\n " . " . " . 10, 15 . () . " "7 " . \r\n, 27 136 .',
        },

        {
          source: {
            id: null,
            name: "Mediatoday.co.kr",
          },
          author: "노지민 기자",
          title: "양자 TV토론 무산에 이재명-윤석열 복잡해져 - 미디어오늘",
          description:
            "법원이 이재명 더불어민주당 후보와 윤석열 국민의힘 후보의 양자 TV토론 방송을 금지했다. 지상파 3사(KBS·MBC·SBS)는 안철수 국민의당 후보와 심상정 정의당 후보를 포함한 4자 토론을 31일이나 내달 3일 개최하자고 4당에 제안했다. 3사는 각 당에 27일까지 출연 여부와 대체 날짜를 알려달라며 28일 ‘룰 미팅’을 제안했다. 민주당, 정의당, 국민의당은 31일이 좋다고 밝혔고, 국민의힘은 향후 협의 후 결정한다는 입장이다.양자토론을 금지한 법원 결정은…",
          url: "http://www.mediatoday.co.kr/news/articleView.html?idxno=302023",
          urlToImage:
            "https://cdn.mediatoday.co.kr/news/thumbnail/202201/302023_405541_559_v150.jpg",
          publishedAt: "2022-01-26T22:55:25Z",
          content:
            "TV . 3(KBS·MBC·SBS) 4 31 3 4 . 3 27 28 ‘ ’ . , , 31 , .\r\n , 3 TV . .\r\n 21( ) “ , , ” . 51( ) “ 3 ” “ , ” .\r\n , . ( “31 ”… ) “() ” “ ‘ ’ ” .\r\n . (‘’ TV, ) “2007 ·· 3 TV ‘ ’ . ” “ 4 1 1 ” .\r\n (‘4 ’ TV,… [+391 chars]",
        },

        {
          source: {
            id: null,
            name: "Mt.co.kr",
          },
          author: "서정환",
          title:
            "“긴 여정을 함께 떠납시다!” 울버햄튼 SNS, 황희찬 완전영입+생일축하 메시지 - MSN",
          description:
            "[OSEN=서정환 기자] &lsquo;황소&rsquo; 황희찬(25, 울버햄튼)이 완전히 울버햄튼 선수가 됐다.울버햄튼은 26일 &lsquo;황희찬과 2026년까지 완전이적 계약을",
          url: "http://osen.mt.co.kr/article/G1111752011",
          urlToImage:
            "http://file.osen.co.kr/article/2022/01/27/202201270747775975_61f1d421cc20c.png",
          publishedAt: "2022-01-26T22:49:00Z",
          content:
            "[OSEN=서정환 기자] ‘황소’ 황희찬(25, 울버햄튼)이 완전히 울버햄튼 선수가 됐다.\r\n울버햄튼은 26일 ‘황희찬과 2026년까지 완전이적 계약을 맺었다’고 공식발표했다. 분데스리가 라이프치히로부터 임대신분이었던 황희찬은 이적에 대한 부담 없이 계속 울버햄튼 소속으로 뛰게 됐다.\r\n울버햄튼 SNS는 26일 황희찬의 계약소식을 전하며 한글로 “긴 여정… [+271 chars]",
        },

        {
          source: {
            id: null,
            name: "Mk.co.kr",
          },
          author: null,
          title:
            "가온차트 뮤직어워즈, 오늘(27일) 개최…태연→강다니엘 참석[MK이슈] - 매일경제",
          description:
            "제11회 가온차트 뮤직어워즈가 오늘(27일) 열린다.   이날 오후 5시 서울 잠실실내체육관에서 제11회 가온차트 뮤직어워즈가 진행된다.   시상식은 코로나19 방역수칙을 철저히 준수해 모든 관객들의 체온측정과 함",
          url: "https://www.mk.co.kr/star/musics/view/2022/01/80993/",
          urlToImage:
            "https://file.mk.co.kr/meet/neds/2022/01/image_readtop_2022_80993_16432344624930314.gif",
          publishedAt: "2022-01-26T22:01:02Z",
          content:
            "11 (27) . \r\n5 11 . \r\n19 2 48 PCR . , . \r\nNCT , , NCT 127, NCT DREAM, , , , , , , , , , , , , 15 . \r\n11 gaonchart 1theK(), TV, . \r\n[ ]\r\nl \r\n[ &amp; mk.co.kr, ]",
        },

        {
          source: {
            id: null,
            name: "Imbc.com",
          },
          author: "이문현",
          title: "중대재해처벌법 오늘부터 시행‥'5인 미만'은 사각지대 - MBC뉴스",
          description:
            "오늘부터 중대재해가 발생하면 하청업체 뿐 아니라 원청업체 대표까지, 징역형으로까지 처벌할 수 있는 '중대재해처벌법'이 시행됩니다. 어떤 점이 달라지는지, 이문현 기자가...",
          url: "https://imnews.imbc.com/replay/2022/nwtoday/article/6336494_35752.html",
          urlToImage:
            "https://image.imnews.imbc.com/replay/2022/nwtoday/article/__icsFiles/afieldfile/2022/01/27/today_20220127_064154_2_6_Large.jpg",
          publishedAt: "2022-01-26T21:42:44Z",
          content:
            ', \'\' . \r\n, .\r\n. \r\n.\r\n9, 1 , .\r\n, 50 .\r\n[ ]\r\n" () , () "\r\nLH , . \r\n, .\r\n, , , .\r\n1 , 10 .\r\n, . \r\n50 , 5 .\r\n.\r\n[ / ]\r\n"5 5 ."\r\n50 81% . \r\n" ", " " .\r\nMBC . \r\nMBC 24 . \r\n02-784-4000mbcjebo@mbc.co.kr@mbc',
        },

        {
          source: {
            id: null,
            name: "Yna.co.kr",
          },
          author: "김유아",
          title:
            "1월 기업 체감경기, 제조업 나빠지고 서비스업은 개선 - 연합뉴스",
          description:
            "(서울=연합뉴스) 김유아 기자 = 최근 물류비 상승과 건설·전자 부문 수요 둔화 등의 영향으로 제조업의 체감 경기가 전반적으로 나빠졌다.",
          url: "https://www.yna.co.kr/view/AKR20220126168500002",
          urlToImage:
            "https://img8.yna.co.kr/photo/cms/2021/01/27/75/PCM20210127000075990_P4.jpg",
          publishedAt: "2022-01-26T21:00:08Z",
          content:
            '(CG)[TV ]\r\n(=) = · .\r\n . \r\n 27 (BSI) BSI 86 1(p) .\r\nBSI , 100 .\r\n 1219 3255 , 2742 ( 1609· 1133) .\r\n BSI(90) 5 (83) 1 3 .\r\n 6 , ·· 17, 11 .\r\n " " " " .\r\n BSI 6, 5 97, 82. BSI 9 100, 3 84.\r\n( BSI) [ .… [+160 chars]',
        },

        {
          source: {
            id: null,
            name: "Nocutnews.co.kr",
          },
          author: "이은지",
          title:
            "달라지는 코로나검사…PCR? 신속항원? 선택 가능한가요 - 노컷뉴스",
          description:
            "지난 2020년 1월 20일 국내 첫 코로나19 환자 발생 이후 PCR(유전자 증폭) 검사를 기반으로 했던 코로나19 진단검사 체계가 '확' 달라진다. 앞서 오미크론 변이가 가장 먼저 우세화된 광주·전남·평택·안성 등 네 지..",
          url: "https://www.nocutnews.co.kr/news/5697235",
          urlToImage:
            "https://file2.nocutnews.co.kr/newsroom/image/2022/01/26/202201262147359840_0.jpg",
          publishedAt: "2022-01-26T20:25:00Z",
          content: null,
        },

        {
          source: {
            id: null,
            name: "Hani.co.kr",
          },
          author: null,
          title:
            "시민학살 모자라 피난촌까지 공습…미얀마 '끝모를 비극' - 한겨레",
          description:
            "미얀마 군부 쿠데타 1년1500명 살해, 8700명 체포시민불복종 ‘잔혹한 탄압’ 저항 들불처럼 타올랐지만탄압 거세져 수십만명 피란길",
          url: "https://www.hani.co.kr/arti/international/asiapacific/1028977.html",
          urlToImage:
            "https://flexible.img.hani.co.kr/flexible/normal/970/646/imgdb/original/2022/0127/20220127500074.jpg",
          publishedAt: "2022-01-26T19:59:28Z",
          content: null,
        },

        {
          source: {
            id: null,
            name: "Newspim.com",
          },
          author: null,
          title: '블링컨 "러에 우크라 관련 답변 전달..공은 넘어갔다" - 뉴스핌',
          description: '블링컨 "러에 우크라 관련 답변 전달..공은 넘어갔다"',
          url: "https://www.newspim.com/news/view/20220127000011",
          urlToImage:
            "http://img.newspim.com/news/2022/01/21/2201212222177960_w.jpg",
          publishedAt: "2022-01-26T19:58:00Z",
          content: "",
        },

        {
          source: {
            id: null,
            name: "Donga.com",
          },
          author: null,
          title: "광주 붕괴 현장서 매몰자 1명 추가 발견 - 동아일보",
          description:
            "광주 서구 화정아이파크 붕괴 사고 현장 27층에서 실종자로 추정되는 매몰자 1명이 발견돼 소방당국이 진입로 확보에 나섰다. 하지만 현장에 콘크리트 잔해물이 뒤엉켜 있고 중장비 투…",
          url: "https://www.donga.com/news/Society/article/all/20220127/111457441/1",
          urlToImage: "",
          publishedAt: "2022-01-26T18:00:00Z",
          content: null,
        },

        {
          source: {
            id: null,
            name: "Donga.com",
          },
          author: null,
          title:
            "바이든 “러, 우크라 침공땐 푸틴 직접 제재”… 러 “파괴적 결과 될것” - 동아일보",
          description:
            "조 바이든 미국 대통령이 25일(현지 시간) 러시아의 우크라이나 침공 시 블라디미르 푸틴 러시아 대통령을 직접 제재할 것이라고 밝혔다. 미국과 러시아 간 외교 관계를 단절하고 냉…",
          url: "https://www.donga.com/news/Inter/article/all/20220127/111457528/1",
          urlToImage:
            "https://dimg.donga.com/a/600/0/90/5/wps/NEWS/IMAGE/2022/01/27/111457511.1.jpg",
          publishedAt: "2022-01-26T18:00:00Z",
          content: null,
        },

        {
          source: {
            id: null,
            name: "Donga.com",
          },
          author: null,
          title: "‘악재 도미노’ 못 견디고… 삼성 이상민 감독 사퇴 - 동아일보",
          description:
            "‘컴퓨터 가드’로 명성을 날렸던 프로농구 삼성의 이상민 감독(50·사진)이 팀 성적 부진과 연이은 선수단 사고에 책임을 지고 전격 사임했다. 삼성은 26일 “이 감독 의사를 구단…",
          url: "https://www.donga.com/news/Sports/article/all/20220126/111457122/1",
          urlToImage:
            "https://dimg.donga.com/a/600/0/90/5/wps/NEWS/IMAGE/2022/01/26/111457121.1.jpg",
          publishedAt: "2022-01-26T18:00:00Z",
          content:
            "- 2017 PO 54 \r\n (50·) .26 . . \r\n. KCC , 2010 . 2014 6 . 20162017 3 . KGC 2 4 . 4 6 . 7 27 . , , . \r\n . 2019 1 . 19 . . 4 19 .. 401 160 241( 0.399) .\r\n54 .\r\n elegant@donga.com",
        },

        {
          source: {
            id: null,
            name: "Hani.co.kr",
          },
          author: null,
          title: "“북한, 사이버 공격 받아 인터넷 전체 한때 다운” - 한겨레",
          description: "로이터 “26일 오전 한때 연결 안돼”…디도스 추정",
          url: "https://www.hani.co.kr/arti/international/asiapacific/1028968.html",
          urlToImage:
            "https://flexible.img.hani.co.kr/flexible/normal/640/405/imgdb/original/2022/0126/20220126504008.jpg",
          publishedAt: "2022-01-26T13:35:17Z",
          content: null,
        },

        {
          source: {
            id: "google-news",
            name: "Google News",
          },
          author: null,
          title: "'오미크론 대유행' 오후 9시 전국 1만2410명 확진 - 이데일리",
          description: null,
          url: "https://news.google.com/__i/rss/rd/articles/CBMiS2h0dHBzOi8vd3d3LmVkYWlseS5jby5rci9uZXdzL3JlYWQ_bmV3c0lkPTA0MTgyMDA2NjMyMjAxNjU2Jm1lZGlhQ29kZU5vPTI1N9IBAA?oc=5",
          urlToImage: null,
          publishedAt: "2022-01-26T13:08:26Z",
          content: null,
        },
      ],
    };
  }

  completeLoading() {
    this.setState({
      isLoading: false,
    });
  }

  componentDidMount() {
    // api call
    // axios
    //   .get("http://localhost:3001/api/news")
    //   .then((res) => {
    //     if (res.status === 200) {
    //       this.completeLoading();
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    const loadingComplete = () =>
      this.setState((prevState) => {
        return {
          ...prevState,
          isLoading: false,
        };
      });

    setTimeout(loadingComplete, 2000);
  }

  render() {
    return (
      <div className="App">
        <Layout isLoading={this.state.isLoading}>
          {this.state.isLoading ? (
            <Loading />
          ) : (
            <Tiles articles={this.state.articles} />
          )}
        </Layout>
      </div>
    );
  }
}

export default App;
