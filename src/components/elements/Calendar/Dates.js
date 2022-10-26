import React, { PureComponent } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import Date from './Date';
import moment from 'moment';

export default class Dates extends PureComponent {

    static defaultProps = {
        // Currently active date index
        // currentDateIndex: 0,
        // Array of dates to render
        dates: [],
        // Callback to handle date select
        onSelectDay: () => { },
        // Callback to handle date render
        onRenderDay: () => { },
    };

    render() {
        const {
            currentDateIndex,
            dates,
            onSelectDay,
            onRenderDay,
        } = this.props;
        return (
            <View style={styles.container}>
                {dates.map((date, index) =>
                    <View key={index}>
                        <Date
                            date={date}
                            index={index}
                            isActive={index === currentDateIndex}
                            onPress={onSelectDay}
                            onRender={onRenderDay}
                            key={index}
                        />
                    </View>
                )}
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignSelf:'baseline',
    },
});