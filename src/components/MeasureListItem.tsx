import {
  IonItem,
  IonLabel,
  IonNote,
  IonItemSliding,
  IonItemOptions,
  IonItemOption
  } from '@ionic/react';
import { Measure } from '../data/measures';
import './MeasureListItem.css';

interface MeasureListItemProps {
  measure: Measure;
  setMeasures: Function;
  measures: Array<Measure>;
}


const MeasureListItem: React.FC<MeasureListItemProps> = ({ measure, setMeasures, measures }) => {
  const removeItem = (measure: Measure) => {
    setMeasures(measures.filter((item) => item.id !== measure.id).sort((a, b) => b.id - a.id))
    console.log(measures)
  };

  
  return (
    // remove the router changing the URL
    <IonItemSliding>
      <IonItemOptions side="end">
        <IonItemOption
          color="danger"
          expandable
          onClick={() => removeItem(measure)}
        >
          Delete
        </IonItemOption>
      </IonItemOptions>
      <IonItem detail={false}>
        <div slot="start" className=""></div>
        <IonLabel className="ion-text-wrap">
          <h2>
            {measure.weight}
            <span className="date">
              <IonNote>{measure.date}</IonNote>
            </span>
          </h2>
        </IonLabel>
      </IonItem>
    </IonItemSliding>
  );
};

export default MeasureListItem;
