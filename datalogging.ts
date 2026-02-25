/**
 * Lagre data til flash-minne
 */
//% block="Datalogging"
//% icon="\uf0ce"
//% color="#378273"
namespace datalogging {
    export enum DeleteType {
        //% block="raskt"
        Fast,
        //% block="fullstendig"
        Full
    }

    let onLogFullHandler: () => void;
    let _disabled = false;

    let initialized = false;
    function init() {
        if (initialized)
            return;
        initialized = true;

        includeTimestamp(FlashLogTimeStampFormat.Seconds);
        mirrorToSerial(false);

        control.onEvent(DAL.MICROBIT_ID_LOG, DAL.MICROBIT_LOG_EVT_LOG_FULL, () => {
            _disabled = true;
            if (onLogFullHandler) {
                onLogFullHandler();
            } else {
                basic.showLeds(`
                    # . . . #
                    # # . # #
                    . . . . .
                    . # # # .
                    # . . . #
                `);
                basic.pause(1000);
                basic.clearScreen();
                basic.showString("928");
            }
        });
    }


    export class ColumnValue {
        public value: string;
        constructor(
            public column: string,
            value: any
        ) {
            this.value = "" + value;
        }
    }

    /**
     * A column and value to log to flash storage
     * @param column the column to set
     * @param value the value to set.
     * @returns A new value that can be stored in flash storage using log data
     */
    //% block="kolonne $column verdi $value"
    //% value.shadow=math_number
    //% column.shadow=datalogging_columnfield
    //% blockId=dataloggingcreatecolumnvalue
    //% group="micro:bit (V2)"
    //% weight=80 help=datalogging/create-cv
    export function createCV(column: string, value: any): ColumnValue {
        return new ColumnValue(column, value);
    }

    //% block="$column"
    //% blockId=datalogging_columnfield
    //% group="micro:bit (V2)"
    //% blockHidden=true shim=TD_ID
    //% column.fieldEditor="autocomplete" column.fieldOptions.decompileLiterals=true
    //% column.fieldOptions.key="dataloggingcolumn"
    export function _columnField(column: string) {
        return column
    }

    /**
     * Log data to flash storage
     * @param data Array of data to be logged to flash storage
     */
    //% block="lagre data array $data"
    //% blockId=datalogginglogdata
    //% data.shadow=lists_create_with
    //% data.defl=dataloggingcreatecolumnvalue
    //% group="micro:bit (V2)"
    //% blockHidden=true
    //% weight=100
    export function logData(data: ColumnValue[]): void {
        if (!data || !data.length)
            return;
        init();

        if (_disabled)
            return;

        flashlog.beginRow();
        for (const cv of data) {
            flashlog.logData(cv.column, cv.value);
        }
        flashlog.endRow();
    }

    /**
     * Log data to flash storage
     * @param data1 First column and value to be logged
     * @param data2 [optional] second column and value to be logged
     * @param data3 [optional] third column and value to be logged
     * @param data4 [optional] fourth column and value to be logged
     * @param data5 [optional] fifth column and value to be logged
     * @param data6 [optional] sixth column and value to be logged
     * @param data7 [optional] seventh column and value to be logged
     * @param data8 [optional] eighth column and value to be logged
     * @param data9 [optional] ninth column and value to be logged
     * @param data10 [optional] tenth column and value to be logged
     * @param data11 [optional] elleventh column and value to be logged
     * @param data12 [optional] twelveth column and value to be logged
     * @param data13 [optional] thirtenth column and value to be logged
     * @param data14 [optional] fourtenth column and value to be logged
     * @param data15 [optional] fifthtenth column and value to be logged
     * @param data16 [optional] sixtenth column and value to be logged
     * @param data17 [optional] seventeth column and value to be logged
     * @param data18 [optional] eightenth column and value to be logged
     * @param data19 [optional] ninetenth column and value to be logged
     * @param data20 [optional] twentieth column and value to be logged
     */
    //% block="logg data $data1||$data2 $data3 $data4 $data5 $data6 $data7 $data8 $data9 $data10 $data11 $data12 $data13 $data14 $data15 $data16 $data17 $data18 $data19 $data20"
    //% blockId=datalogginglog
    //% data1.shadow=dataloggingcreatecolumnvalue
    //% data2.shadow=dataloggingcreatecolumnvalue
    //% data3.shadow=dataloggingcreatecolumnvalue
    //% data4.shadow=dataloggingcreatecolumnvalue
    //% data5.shadow=dataloggingcreatecolumnvalue
    //% data6.shadow=dataloggingcreatecolumnvalue
    //% data7.shadow=dataloggingcreatecolumnvalue
    //% data8.shadow=dataloggingcreatecolumnvalue
    //% data9.shadow=dataloggingcreatecolumnvalue
    //% data10.shadow=dataloggingcreatecolumnvalue
    //% data11.shadow=dataloggingcreatecolumnvalue
    //% data12.shadow=dataloggingcreatecolumnvalue
    //% data13.shadow=dataloggingcreatecolumnvalue
    //% data14.shadow=dataloggingcreatecolumnvalue
    //% data15.shadow=dataloggingcreatecolumnvalue
    //% data16.shadow=dataloggingcreatecolumnvalue
    //% data17.shadow=dataloggingcreatecolumnvalue
    //% data18.shadow=dataloggingcreatecolumnvalue
    //% data19.shadow=dataloggingcreatecolumnvalue
    //% data20.shadow=dataloggingcreatecolumnvalue
    //% inlineInputMode="variable"
    //% inlineInputModeLimit=1
    //% group="micro:bit (V2)"
    //% weight=100 help=datalogging/log
    export function log(
        data1: datalogging.ColumnValue,
        data2?: datalogging.ColumnValue,
        data3?: datalogging.ColumnValue,
        data4?: datalogging.ColumnValue,
        data5?: datalogging.ColumnValue,
        data6?: datalogging.ColumnValue,
        data7?: datalogging.ColumnValue,
        data8?: datalogging.ColumnValue,
        data9?: datalogging.ColumnValue,
        data10?: datalogging.ColumnValue,
        data11?: datalogging.ColumnValue,
        data12?: datalogging.ColumnValue,
        data13?: datalogging.ColumnValue,
        data14?: datalogging.ColumnValue,
        data15?: datalogging.ColumnValue,
        data16?: datalogging.ColumnValue,
        data17?: datalogging.ColumnValue,
        data18?: datalogging.ColumnValue,
        data19?: datalogging.ColumnValue,
        data20?: datalogging.ColumnValue
    ): void {
        logData(
            [
                data1,
                data2,
                data3,
                data4,
                data5,
                data6,
                data7,
                data8,
                data9,
                data10,
                data11,
                data12,
                data13,
                data14,
                data15,
                data16,
                data17,
                data18,
                data19,
                data20,
            ].filter(el => !!el)
        );
    }

    /**
     * Set the columns for future data logging
     * @param cols Array of the columns that will be logged.
     */
    //% block="sett kolonne $cols"
    //% blockId=dataloggingsetcolumns
    //% data.shadow=list_create_with
    //% data.defl=datalogging_columnfield
    //% group="micro:bit (V2)"
    //% blockHidden=true
    //% weight=70
    export function setColumns(cols: string[]): void {
        if (!cols)
            return;

        logData(cols.map(col => createCV(col, "")));
    }

    /**
     * Set the columns for future data logging
     * @param col1 Title for first column to be added
     * @param col2 Title for second column to be added
     * @param col3 Title for third column to be added
     * @param col4 Title for fourth column to be added
     * @param col5 Title for fifth column to be added
     * @param col6 Title for sixth column to be added
     * @param col7 Title for seventh column to be added
     * @param col8 Title for eighth column to be added
     * @param col9 Title for ninth column to be added
     * @param col10 Title for tenth column to be added
     * @param col11 Title for elleventh column to be added
     * @param col12 Title for twelveth column to be added
     * @param col13 Title for thirtenth column to be added
     * @param col14 Title for fourtenth column to be added
     * @param col15 Title for fifthtenth column to be added
     * @param col16 Title for sixtenth column to be added
     * @param col17 Title for sevententh column to be added
     * @param col18 Title for eighttenth column to be added
     * @param col19 Title for ninetenth column to be added
     * @param col20 Title for twentieth column to be added
     */
    //% block="sett kolonner $col1||$col2 $col3 $col4 $col5 $col6 $col7 $col8 $col9 $col10 $col11 $col12 $col13 $col14 $col15 $col16 $col17 $col18 $col19 $col20"
    //% blockId=dataloggingsetcolumntitles
    //% inlineInputMode="variable"
    //% inlineInputModeLimit=1
    //% group="micro:bit (V2)"
    //% weight=70 help=datalogging/set-column-titles
    //% col1.shadow=datalogging_columnfield
    //% col2.shadow=datalogging_columnfield
    //% col3.shadow=datalogging_columnfield
    //% col4.shadow=datalogging_columnfield
    //% col5.shadow=datalogging_columnfield
    //% col6.shadow=datalogging_columnfield
    //% col7.shadow=datalogging_columnfield
    //% col8.shadow=datalogging_columnfield
    //% col9.shadow=datalogging_columnfield
    //% col10.shadow=datalogging_columnfield
    //% col11.shadow=datalogging_columnfield
    //% col12.shadow=datalogging_columnfield
    //% col13.shadow=datalogging_columnfield
    //% col14.shadow=datalogging_columnfield
    //% col15.shadow=datalogging_columnfield
    //% col16.shadow=datalogging_columnfield
    //% col17.shadow=datalogging_columnfield
    //% col18.shadow=datalogging_columnfield
    //% col19.shadow=datalogging_columnfield
    //% col20.shadow=datalogging_columnfield
    export function setColumnTitles(
        col1: string,
        col2?: string,
        col3?: string,
        col4?: string,
        col5?: string,
        col6?: string,
        col7?: string,
        col8?: string,
        col9?: string,
        col10?: string,
        col11?: string,
        col12?: string,
        col13?: string,
        col14?: string,
        col15?: string,
        col16?: string,
        col17?: string,
        col18?: string,
        col19?: string,
        col20?: string
    ): void {
        logData(
            [col1, col2, col3, col4, col5, col6, col7, col8, col9, col10, col11, col12, col13, col14, col15, col16, col17, col18, col19, col20]
                .filter(el => !!el)
                .map(col => createCV(col, ""))
        );
    }

    /**
     * Delete all existing logs, including column headers. By default this only marks the log as
     * overwriteable / deletable in the future.
     * @param deleteType optional set whether a deletion will be fast or full
     */
    //% block="slett logg||$deleteType"
    //% blockId=dataloggingdeletelog
    //% group="micro:bit (V2)"
    //% weight=60 help=datalogging/delete-log
    export function deleteLog(deleteType?: DeleteType): void {
        init();
        flashlog.clear(deleteType === DeleteType.Full);
        _disabled = false;
    }

    /**
     * Register an event to run when no more data can be logged.
     * @param handler code to run when the log is full and no more data can be stored.
     */
    //% block="når logg er full"
    //% blockId="on log full"
    //% group="micro:bit (V2)"
    //% weight=40 help=datalogging/on-log-full
    export function onLogFull(handler: () => void): void {
        init();
        onLogFullHandler = handler;
    }

    /**
     * Set the format for timestamps
     * @param format Format in which to show the timestamp. Setting FlashLogTimeStampFormat.None will disable the timestamp.
     */
    //% block="sett tidsstempel $format"
    //% blockId=dataloggingtoggleincludetimestamp
    //% format.defl=FlashLogTimeStampFormat.None
    //% group="micro:bit (V2)"
    //% weight=30 help=datalogging/include-timestamp
    export function includeTimestamp(format: FlashLogTimeStampFormat): void {
        init();
        flashlog.setTimeStamp(format);
    }

    /**
     * Set whether data is mirrored to serial or not.
     * @param on if true, data that is logged will be mirrored to serial
     */
    //% block="speil data til serial $on"
    //% blockId=dataloggingtogglemirrortoserial
    //% on.shadow=toggleOnOff
    //% on.defl=false
    //% weight=25 help=datalogging/mirror-to-serial
    export function mirrorToSerial(on: boolean): void {
        // TODO:/note intentionally does not have group, as having the same group for all
        // blocks in a category causes the group to be elided.
        init();
        flashlog.setSerialMirroring(on);
    }

    /**
     * Number of rows currently used by the datalogging, start counting at fromRowIndex
     * Treats the header as the first row
     * @param fromRowIndex 0-based index of start
     * @returns header + rows
     */
    export function getNumberOfRows(fromRowIndex: number = 0): number {
        return flashlog.getNumberOfRows(fromRowIndex);
    }

    /**
     * Get all rows seperated by a newline & each column seperated by a comma.
     * Starting at the 0-based index fromRowIndex & counting inclusively until nRows.
     * @param fromRowIndex 0-based index of start
     * @param nRows inclusive count from fromRowIndex
     * @returns String where newlines denote rows & commas denote columns
     */
    export function getRows(fromRowIndex: number, nRows: number): string {
        return flashlog.getRows(fromRowIndex, nRows);
    }
}
