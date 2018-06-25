import axios from "axios";

/**
 * fetching bar data from API
 * @param fetchSuccess
 * @param fetchError
 */
export function fetchProgressBarData(fetchSuccess, fetchError) {
    axios.get('http://pb-api.herokuapp.com/bars')
        .then(function (response) {
            fetchSuccess(response.data);
        })
        .catch(function (error) {
            fetchError(error);
        });
}