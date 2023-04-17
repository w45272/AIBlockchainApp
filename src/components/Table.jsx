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
                    <td>{props.passenger().class}</td>
                    <td>{props.passenger().sex}</td>
                    <td>{props.passenger().age}</td>
                    <td>{props.passenger().ssAboard}</td>
                    <td>{props.passenger().pcAboard}</td>
                    <td>{props.passenger().fare}</td>
                </tr>
                <tr>
                    <td><input type="checkbox" style="text-align:center;" ng-model="x.dedbuffer"></input></td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                </tr>
                <tr>
                    <td><input type="checkbox" style="text-align:center;" ng-model="x.dedbuffer"></input></td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                </tr>
                <tr>
                    <td><input type="checkbox" style="text-align:center;" ng-model="x.dedbuffer"></input></td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                </tr>
                <tr>
                    <td><input type="checkbox" style="text-align:center;" ng-model="x.dedbuffer"></input></td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                </tr>
                <tr>
                    <td><input type="checkbox" style="text-align:center;" ng-model="x.dedbuffer"></input></td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                </tr>
                <tr>
                    <td><input type="checkbox" style="text-align:center;" ng-model="x.dedbuffer"></input></td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                </tr>
                <tr>
                    <td><input type="checkbox" style="text-align:center;" ng-model="x.dedbuffer"></input></td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                </tr>
                <tr>
                    <td><input type="checkbox" style="text-align:center;" ng-model="x.dedbuffer"></input></td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                </tr>
                <tr>
                    <td><input type="checkbox" style="text-align:center;" ng-model="x.dedbuffer"></input></td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                </tr>
                <tr>
                    <td><input type="checkbox" style="text-align:center;" ng-model="x.dedbuffer"></input></td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                </tr>
            </tbody>
        </table>
    );
}


