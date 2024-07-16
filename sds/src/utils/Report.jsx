import axios from 'axios';

const onReport = async ( data ) => {
    const API_BASE_URL = process.env.REACT_APP_API_KEY;
    const token = sessionStorage.getItem("accessToken");
    console.log(data);

    axios
      .post(`${API_BASE_URL}/report`, {
        title: data.title,
        detail: data.detail,
        time: data.time,
        date: data.date
      }, {headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        alert('신고 접수가 되었습니다.');
      })
      .catch((err) => {
        console.log(err);
        alert("에러가 발생했습니다.");
    });
}

export default onReport;