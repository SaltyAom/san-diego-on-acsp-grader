/* Last edited: 27 March 2020 11:14+07:00 */
let pathId = window.location.pathname.replace("/parent/student_report_grade/", "");
fetch(`/parent/ajax_get_report_grade_data?task_id=${pathId}`)
    .then(res => {
        return res.text()
    }).then(data => {
        let regex = /<script\b[^>]*>([\s\S]*?)<\/script>/gm,
            regexEdit = data.replace(regex, "");
        document.write(`
            <!DOCTYPE html><html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta charset="utf-8"><title>WATASHI WA NUMBA WAN!</title><style>*{box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,san-serif}::-webkit-selection,::selection{background-color:rgba(255,255,255,.25)}body{display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:100vh;margin:0;background-color:#000}#san-diego{position:fixed;z-index:-2;width:100%;height:100vh;border:0}#overlay{position:fixed;z-index:-2;width:100%;height:100vh;background-color:rgba(0,0,0,.65)}.table{max-width:100%;overflow:scroll}th{padding:10px 25px}thead>tr>th:nth-child(2){width:250px}td,th{color:#fff;font-size:21px}tbody>tr:nth-child(11){padding:30px 15px}.basic>td,.supp>td{padding:2px;-webkit-border-horizontal-spacing:0;-webkit-border-vertical-spacing:0}.basic:nth-child(even),.supp:nth-child(odd){background-color:rgba(255,255,255,.25)}#orientation{position:fixed;z-index:10;top:calc(50vh - 140px);left:calc(50% - 140px);display:none;flex-direction:column;justify-content:center;align-items:center;width:280px;height:280px;min-height:260px;background-color:rgba(255,255,255,.875);backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px);color:#000;font-size:18px;padding:15px;border-radius:20px;text-align:center}@media screen and (max-width:767.9px){body{justify-content:flex-start}.table{overflow:hidden}tr{overflow:scroll;-webkit-overflow-scrolling:touch}td,th{font-size:17px}@media screen and (orientation:portrait){#orientation{display:flex}}}@media screen and (max-height: 768px){body{justify-content:flex-start;padding-top:20px;}}</style><script>setTimeout(() => {
                document.getElementById("san-diego").src += "&autoplay=1"
            }, 1000);</script></head><body><iframe id="san-diego" title="San Diego" src="https://www.youtube.com/embed/0majDKJPay4?start=9&rel=0?version=3&controls=0&showinfo=0&loop=1&playlist=0majDKJPay4" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><div id="overlay"></div><div id="orientation">Turn device landscape.</div><!-- ! -->${regexEdit}<!-- ! --></body></html>
        `)
    })
