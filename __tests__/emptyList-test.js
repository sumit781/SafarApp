/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import EmptyListComponent from '../src/components/EmptyListComponent';

it('porp test', () => {
 let emptyRef= renderer.create(<EmptyListComponent mainTitle={"india"}/>).getInstance();
 expect(emptyRef.props.mainTitle).toEqual("india")
});
