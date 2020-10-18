import axios from 'axios';

const url = "https://api.github.com"

const api = ({
      baseUrl: url,
      client_id: "012800a552fedc694bc7",
      client_secret: "7668631c551bf22819edf80a6d66069999846f0a",
    });
    console.log("API", api.baseUrl)

export const getIssues = async (page) =>(
    axios.get(api.baseUrl +"/repos/facebook/react/issues?filter=all&state=all&sort=created&direction=desc&page=" + page + "&per_page=10&" + api.client_id + "&=" + api.client_secret)) 
        .then((res) => (res.data))
        .catch((error) => (error))
;
    

export const getAllIssues = async () =>(
    axios.get(api.baseUrl +"/repos/facebook/react/issues?sort=created&direction=desc&"  + api.client_id + "&=" + api.client_secret)) 
        .then((res) => (res.data))
        .catch((error) => (error))
;
   
export const getOpenIssues = async (page) =>(
    axios.get(api.baseUrl +"/repos/facebook/react/issues?filter=all&state=open&sort=created&direction=desc&page=" + page + "&per_page=10&" + api.client_id + "&=" + api.client_secret)) 
        .then((res) => (res.data))
        .catch((error) => (error))
;

export const getClosedIssues = async (page) =>(
    axios.get(api.baseUrl +"/repos/facebook/react/issues?filter=all&state=closed&sort=created&direction=desc&page=" + page + "&per_page=10&" + api.client_id + "&=" + api.client_secret)) 
        .then((res) => (res.data))
        .catch((error) => (error))
;




