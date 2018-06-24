import axios from "axios";

export function fetchProgressBarData(fetchSuccess,fetchError) {
    axios.get('http://pb-api.herokuapp.com/bars')
        .then(function (response) {
            fetchSuccess(response.data);
        })
        .catch(function (error) {
            fetchError(error);
        });
}