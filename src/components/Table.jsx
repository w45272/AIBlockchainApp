import { createEffect, createSignal } from "solid-js";
import "./Table.css";

export default function Table(props) {

    return (
        <table class="GeneratedTable">
            <thead>
                <tr>
                    <th>Survived?</th>
                    <th>Class</th>
                    <th>Sex</th>
                    <th>Age</th>
                    <th>Siblings/Spouses Aboard</th>
                    <th>Parents/Children Aboard</th>
                    <th>Fare</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input type="checkbox" style="text-align:center;" ng-model="x.dedbuffer"></input></td>
                    <td>{props.passenger0().class}</td>
                    <td>{props.passenger0().sex}</td>
                    <td>{props.passenger0().age}</td>
                    <td>{props.passenger0().ssAboard}</td>
                    <td>{props.passenger0().pcAboard}</td>
                    <td>{props.passenger0().fare}</td>
                </tr>
                <tr>
                    <td><input type="checkbox" style="text-align:center;" ng-model="x.dedbuffer"></input></td>
                    <td>{props.passenger1().class}</td>
                    <td>{props.passenger1().sex}</td>
                    <td>{props.passenger1().age}</td>
                    <td>{props.passenger1().ssAboard}</td>
                    <td>{props.passenger1().pcAboard}</td>
                    <td>{props.passenger1().fare}</td>
                </tr>
                <tr>
                    <td><input type="checkbox" style="text-align:center;" ng-model="x.dedbuffer"></input></td>
                    <td>{props.passenger2().class}</td>
                    <td>{props.passenger2().sex}</td>
                    <td>{props.passenger2().age}</td>
                    <td>{props.passenger2().ssAboard}</td>
                    <td>{props.passenger2().pcAboard}</td>
                    <td>{props.passenger2().fare}</td>
                </tr>
                <tr>
                    <td><input type="checkbox" style="text-align:center;" ng-model="x.dedbuffer"></input></td>
                    <td>{props.passenger3().class}</td>
                    <td>{props.passenger3().sex}</td>
                    <td>{props.passenger3().age}</td>
                    <td>{props.passenger3().ssAboard}</td>
                    <td>{props.passenger3().pcAboard}</td>
                    <td>{props.passenger3().fare}</td>
                </tr>
                <tr>
                    <td><input type="checkbox" style="text-align:center;" ng-model="x.dedbuffer"></input></td>
                    <td>{props.passenger4().class}</td>
                    <td>{props.passenger4().sex}</td>
                    <td>{props.passenger4().age}</td>
                    <td>{props.passenger4().ssAboard}</td>
                    <td>{props.passenger4().pcAboard}</td>
                    <td>{props.passenger4().fare}</td>
                </tr>
                <tr>
                    <td><input type="checkbox" style="text-align:center;" ng-model="x.dedbuffer"></input></td>
                    <td>{props.passenger5().class}</td>
                    <td>{props.passenger5().sex}</td>
                    <td>{props.passenger5().age}</td>
                    <td>{props.passenger5().ssAboard}</td>
                    <td>{props.passenger5().pcAboard}</td>
                    <td>{props.passenger5().fare}</td>
                </tr>
                <tr>
                    <td><input type="checkbox" style="text-align:center;" ng-model="x.dedbuffer"></input></td>
                    <td>{props.passenger6().class}</td>
                    <td>{props.passenger6().sex}</td>
                    <td>{props.passenger6().age}</td>
                    <td>{props.passenger6().ssAboard}</td>
                    <td>{props.passenger6().pcAboard}</td>
                    <td>{props.passenger6().fare}</td>
                </tr>
                <tr>
                    <td><input type="checkbox" style="text-align:center;" ng-model="x.dedbuffer"></input></td>
                    <td>{props.passenger7().class}</td>
                    <td>{props.passenger7().sex}</td>
                    <td>{props.passenger7().age}</td>
                    <td>{props.passenger7().ssAboard}</td>
                    <td>{props.passenger7().pcAboard}</td>
                    <td>{props.passenger7().fare}</td>
                </tr>
                <tr>
                    <td><input type="checkbox" style="text-align:center;" ng-model="x.dedbuffer"></input></td>
                    <td>{props.passenger8().class}</td>
                    <td>{props.passenger8().sex}</td>
                    <td>{props.passenger8().age}</td>
                    <td>{props.passenger8().ssAboard}</td>
                    <td>{props.passenger8().pcAboard}</td>
                    <td>{props.passenger8().fare}</td>
                </tr>
                <tr>
                    <td><input type="checkbox" style="text-align:center;" ng-model="x.dedbuffer"></input></td>
                    <td>{props.passenger9().class}</td>
                    <td>{props.passenger9().sex}</td>
                    <td>{props.passenger9().age}</td>
                    <td>{props.passenger9().ssAboard}</td>
                    <td>{props.passenger9().pcAboard}</td>
                    <td>{props.passenger9().fare}</td>
                </tr>
            </tbody>
        </table>
    );
}