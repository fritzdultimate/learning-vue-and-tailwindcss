import { NOMICS } from '../../../common/http/http-nomics';
import { ref } from 'vue';

const result = ref([]);
NOMICS.get('currencies/ticker?key=2f05330024af0f4a7ade6ab5e986ccb74a669297&ids=BTC,ETH,USDT&intervals=1d&convert=USD&per-page=100&page=1')
.then(response => {
    result.value = response.data;
});

export default result;