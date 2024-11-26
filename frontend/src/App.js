import React, { useContext } from 'react';

// Features
import { Header } from './features/dashboard/dashboard';
import { CustomTable } from './features/custom-table/custom-table';

// Context
import { ModalContext } from './contexts/modal-context/modal-context';

// Ui
import { Overlay } from './components/ui/overlay';
import { ModalLayout } from './components/layout/modal-layout/modal-layout';

const App = () => {
  const { ModalStates } = useContext(ModalContext);
  const { modalOpen } = ModalStates;

  return (
    <main className={`h-[100vh]`}>
      <section className='p-10 min-w-[1000px] max-w-[1920px] m-auto'>

        {/* Header of dashboard */}
        <Header />

        {/* Custom table with data */}
        <CustomTable />

        {/* if modal is open, overlay on */}
        {modalOpen.state && <Overlay />}
        {modalOpen.state && <ModalLayout ModalStates={ModalStates} />}

      </section>
    </main>
  );
};

export default App;