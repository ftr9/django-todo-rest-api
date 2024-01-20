import './App.css';

import ResultImage from './components/ResultImage';

function App() {
  return (
    <div className="rootContainer">
      <ResultImage />
    </div>
  );
}

/**
 * <Header />
      <div className="inputImageContainer">
        <div className="inputImageContent">
          <UserInputImage />
        </div>
      </div>
 */

/**
 * const [selectedImageUrl, setSelectedImageUrl] = useState(null);
  const [selectedImageFile, setSelectedImageFile] = useState(null);

  const selectImageChangeHandle = e => {
    const imageReader = new FileReader();
    imageReader.readAsDataURL(e.target.files[0]);
    imageReader.addEventListener('load', () => {
      setSelectedImageUrl(imageReader.result);
      setSelectedImageFile(e.target.files[0]);
    });
  };

  const selectAnotherHandle = () => {
    setSelectedImageUrl(null);
  };

  useEffect(() => {
    const sampleFetch = async () => {
      const data = await fetch('/logix/api/?format=json');
      const fetchedJson = await data.json();
      console.log(fetchedJson);
    };

    sampleFetch();
  }, []);

  return (
    <>
      {selectedImageUrl ? (
        <>
          <button onClick={selectAnotherHandle}>Select Another</button>
          <ConvertImage
            imageSrc={selectedImageUrl}
            imageFile={selectedImageFile}
          />
        </>
      ) : (
        <input
          onChange={selectImageChangeHandle}
          type="file"
          name="sourceImg"
        />
      )}
    </>
  );
 * 
 * 
 */

export default App;
