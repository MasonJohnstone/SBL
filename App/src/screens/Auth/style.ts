import { StyleSheet } from 'react-native';

export default StyleSheet.create({
container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  padding: 16,
  backgroundColor: 'rgba(0, 0, 0, 0)', // optional for dimming
},
  background: {
    flex: 1,
  },  
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#eee',
    borderRadius: 5,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
  },
  button: {
    backgroundColor: '#00FFC2',
    padding: 12,
    borderRadius: 5,
    marginRight: 10,
  },
  buttonText: {
    fontWeight: 'bold',
  },
});
