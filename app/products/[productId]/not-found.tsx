export const rootNotFoundMetadata = {
  title: 'Not Found',
  description: 'sorry cannot find the page you are looking for',
};
export default function RootNotFound() {
  return (
    <div className="bg-tertiary">
      <div className="sm:mt-[200px] mt-[120px] font-fraunces text-xl flex justify-center">
        Sorry this product was not found.
      </div>
    </div>
  );
}
