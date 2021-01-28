
document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: '#app',
        data: () => ({
            code: `//Your JSON mock here, please not comments and trailing commas
/** This produce error ❌
    {
        "key": "value",
    }
    This is correct ✅
    {
        "key": "value"
    }
**/`,
            req: 'GET',
            name: '',
            status: 200
        }),
        methods: {
            highlighter(code) {
                // js highlight example
                return Prism.highlight(code, Prism.languages.js, "js");
            },
            async saveMock() {
                try {
                    const jsonParse = JSON.parse(this.code);
                    const req = await axios.post('/save-mock', {
                        code: jsonParse,
                        type: this.req,
                        name: this.name,
                        status: parseInt(this.status)
                    });
                    const data = req.data;
                    alert(`Mock saved in route ${window.location.protocol}//${window.location.host}${data.url}`);
                } catch (e) {
                    console.log(e);
                    alert('Error in JSON Format');
                }
            }
        },
    });
});
