'use client';
import { createTaskCustom } from '@/utils/actions';
import { useFormStatus, useFormState } from 'react-dom';
import { toast } from 'react-hot-toast';
import { useEffect, useRef } from 'react';

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type='submit'
      className='btn btn-primary join-item'
      disabled={pending}
    >
      {pending ? 'please wait...' : 'create task'}
    </button>
  );
};

const initialState = {
  message: null,
};

const TaskFormCustom = () => {
  const [state, formAction] = useFormState(createTaskCustom, initialState);
  const inputRef = useRef(null);

  useEffect(() => {
    if (state.message === 'error') {
      toast.error('there was an error');
      return;
    }

    if (state.message === 'success') {
      toast.success('task created');
    }
  }, [state]);

  return (
    <form action={formAction}>
      {/* {state.message ? <p className='mb-2'>{state.message}</p> : null} */}
      <div className='join w-full'>
        <input
          type='text'
          className='input input-bordered join-item w-full'
          placeholder='type here'
          name='content'
          required
          ref={inputRef}
        />
        <SubmitBtn
          onClick={
            state.message === 'success' ? (inputRef.current.value = null) : null
          }
        />
      </div>
    </form>
  );
};
export default TaskFormCustom;
