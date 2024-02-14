import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

function ChangeDate({ dataAds, sellerId }) {
    if (dataAds) {
        return format(dataAds, 'd MMMM yyyy', { locale: ru });
    }
    if (sellerId) {
        return format(sellerId, 'd MMMM yyyy', { locale: ru });
    }
}

export default ChangeDate;
