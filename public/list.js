
document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: '#app',
        data: () => ({
            mocks: null
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
                        name: this.name
                    });
                    const data = req.data;
                    alert(`Mock saved in route ${window.location.protocol}//${window.location.host}${data.url}`);
                } catch (e) {
                    console.log(e);
                    alert('Error in JSON Format');
                }
            }
        },
        async mounted() {
            try {
                const req = await axios.get('/get-mocks');
                this.mocks = req.data;
                console.log(this.mocks);
            } catch (e) {
                console.log(e);
            }
        }
    });
});
