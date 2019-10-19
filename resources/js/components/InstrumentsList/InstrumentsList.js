import React, { PureComponent } from "react";
import AppContext from "../../AppContext";
import Instrument from "./Instrument/Instrument";
import SearchBar from "./SearchBar/Searchbar";
import EditInstrument from "./EditInstrument/EditInstrument";
import RemoveModal from "../Helpers/RemoveModal";
class InstrumentsList extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            _rawInstrumentsList: [],
            instrumentsList: [],
            filters: [],
            instrumentForEdit: {},
            removeModal: false
        };
    }

    editInstrument = instrument => {
        this.setState({
            instrumentForEdit: instrument
        });
    };

    getInstruments = () => {
        return new Promise((resolve, reject) => {
            this.context
                .getRequest("/v1/instrument/all")
                .then(async resp => {
                    const list = resp.data.value.map(elem => {
                        const newElem = Object.assign({}, elem);
                        newElem.name = elem.name.name;
                        newElem.user = elem.user
                            ? `${elem.user.name} ${elem.user.surname}`
                            : "";
                        return newElem;
                    });
                    await this.setState({
                        instrumentsList: list,
                        _rawInstrumentsList: list
                    });
                    resolve();
                })
                .catch(err => {
                    this.context.setMsg({ text: err, status: 2, clear: true });
                    reject();
                });
        });
    };

    setFilter = (value, type) => {
        return new Promise(async resolve => {
            const newFilters = [...this.state.filters];
            const current = newFilters.findIndex(elem => elem.type === type);
            if (current > -1) {
                newFilters[current] = { type, value };
            } else {
                newFilters.push({ type, value });
            }
            await this.setState({
                filters: newFilters
            });
            resolve();
        });
    };
    filter = () => {
        const newInstrumentsList = [...this.state._rawInstrumentsList].filter(
            elem => {
                let contain = true;
                const arr = this.state.filters;
                for (let index = 0; index < arr.length; index++) {
                    const element = arr[index];

                    if (
                        !elem[element.type].toString().includes(element.value)
                    ) {
                        contain = false;
                        break;
                    }
                }

                return contain === true;
            }
        );
        this.setState({
            instrumentsList: newInstrumentsList
        });
    };

    setRemoveModal = id => {
        this.setState({
            removeId: id,
            removeModal: true
        });
    };
    removeInstrument = id => {
        return new Promise(async resolve => {
            await this.context.postRequest("/v1/instrument/del", { id });
            await this.getInstruments();
            resolve();
        });
    };

    componentDidMount() {
        this.getInstruments();
    }

    render() {
        const {
            instrumentsList,
            removeModal,
            instrumentForEdit,
            removeId
        } = this.state;
        return (
            <>
                {removeModal && (
                    <RemoveModal
                        label={"Czy chcesz usunąć instrument?"}
                        actionCancel={() =>
                            this.setState({
                                removeModal: false,
                                removeId: null
                            })
                        }
                        actionOK={async () => {
                            await this.removeInstrument(removeId);
                            this.setState({
                                removeModal: false
                            });
                        }}
                    />
                )}
                {instrumentForEdit.id && (
                    <EditInstrument
                        instrumentForEdit={instrumentForEdit}
                        closeModal={() => this.editInstrument({})}
                        getInstruments={this.getInstruments}
                    />
                )}
                <div className="content__container ">
                    <div className="content__header">Lista instrumentów</div>
                    <table className="instruments-table__container">
                        <thead>
                            <tr>
                                <th>
                                    <SearchBar
                                        label={"ID"}
                                        filter={this.filter}
                                        type={"id"}
                                        setFilter={this.setFilter}
                                    />
                                </th>
                                <th>
                                    <SearchBar
                                        label={"Typ"}
                                        filter={this.filter}
                                        type={"name"}
                                        setFilter={this.setFilter}
                                    />
                                </th>
                                <th>
                                    <SearchBar
                                        label={"Nr. Katalogowy"}
                                        filter={this.filter}
                                        type={"catalog_id"}
                                        setFilter={this.setFilter}
                                    />
                                </th>
                                <th>
                                    <SearchBar
                                        label={"Uzytkownik"}
                                        filter={this.filter}
                                        type={"user"}
                                        setFilter={this.setFilter}
                                    />
                                </th>
                                <th>Informacje dodatkowe</th>
                                <th />
                                <th />
                            </tr>
                        </thead>
                        <tbody>
                            {instrumentsList.map(elem => (
                                <Instrument
                                    key={elem.id}
                                    elem={elem}
                                    removeInstrument={() =>
                                        this.setRemoveModal(elem.id)
                                    }
                                    editInstrument={() =>
                                        this.editInstrument(elem)
                                    }
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </>
        );
    }
}

InstrumentsList.contextType = AppContext;
export default InstrumentsList;
