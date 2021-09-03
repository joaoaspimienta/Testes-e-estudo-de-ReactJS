import CharacterInfo from './CharacterInfo'
import YourLevel from './YourLevel'

export default function App() {
  return (
    <div className="App">
      <CharacterInfo name="Frei" class="rogue" />
      <YourLevel />
    </div>
  );
}