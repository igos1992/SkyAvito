import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

function ChangeDate({ dataAds, sellerId, comm }) {
    if (dataAds) {
        return format(dataAds, 'd MMMM yyyy', { locale: ru });
    }
    if (sellerId) {
        return format(sellerId, 'd MMMM yyyy', { locale: ru });
    }
    if (comm) {
        return format(comm, 'd MMMM yyyy', { locale: ru });
    }
    
}

export default ChangeDate;
