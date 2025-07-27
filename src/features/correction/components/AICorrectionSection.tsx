'use client';

import { useState } from 'react';
import ReductionToggle from './ReductionToggle';
import ConcretizationToggle from './ConcretizationToggle';
import ReductionMark from './ReductionMark';
import ConcretizationMark from './ConcretizationMark';
import TailoredDropdown from './TailoredDropdown';

interface LineReview {
  line_number: number;
  original_content: string;
  type: 0 | 1 | 2;
  review_comment: string | null;
}

interface AICorrectionSectionProps {
  title: string;
  content: string;
  reviewResults?: LineReview[];
  category?: string;
  contribution?: number;
  initialReductionToggle?: boolean;
  initialConcretizationToggle?: boolean;
}

const AICorrectionSection = ({
  title,
  content,
  reviewResults = [],
  category = '프로젝트',
  contribution = 80,
  initialReductionToggle = false,
  initialConcretizationToggle = false,
}: AICorrectionSectionProps) => {
  const [toggleROn, setRToggleOn] = useState(initialReductionToggle);
  const [toggleCOn, setCToggleOn] = useState(initialConcretizationToggle);

  // 컨텐츠를 라인별로 분리
  const contentLines = content.split('\n').filter((line) => line.trim() !== '');

  // 첨삭 코멘트 수집
  const reductionComments = reviewResults
    .filter((review) => review.type === 1 && review.review_comment)
    .map((review) => review.review_comment!);

  const concretizationComments = reviewResults
    .filter((review) => review.type === 2 && review.review_comment)
    .map((review) => review.review_comment!);

  // 라인별 첨삭 타입을 매핑하는 함수
  const getLineType = (lineIndex: number): 0 | 1 | 2 => {
    const review = reviewResults.find((r) => r.line_number === lineIndex + 1);
    return review ? review.type : 0;
  };

  // 라인 렌더링 함수
  const renderContentLine = (line: string, index: number) => {
    const lineType = getLineType(index);
    const shouldHighlight = (toggleROn && lineType === 1) || (toggleCOn && lineType === 2);

    // 하이라이트 배경색 결정
    let highlightClass = '';
    if (toggleROn && lineType === 1) {
      highlightClass = 'bg-[#FDF5F5] border-l-[4px] border-[#EF7C7C]'; // 빨간색 하이라이트
    } else if (toggleCOn && lineType === 2) {
      highlightClass = 'bg-[#F5FBF5] border-l-[4px] border-[#97D099]'; // 초록색 하이라이트
    }

    return (
      <div
        key={index}
        className={`mb-2 py-2 px-3 rounded-[4px] transition-all duration-200 ${shouldHighlight ? highlightClass : ''}`}
      >
        <p className="text-[18px] max-lg:text-[16px] leading-relaxed">{line}</p>
      </div>
    );
  };

  return (
    <div className="w-full max-w-[1520px] mx-auto">
      {/* 메타 정보 섹션 */}
      <div className="flex flex-row items-center w-full max-lg:flex-col max-lg:items-start mb-[40px]">
        <div className="flex items-center">
          <div className="w-[99px] h-[37px] bg-[#DAF3F3] grid place-items-center gap-[10px] rounded-[4px] font-semibold text-[18px]">
            진행 기간
          </div>
          <p className="text-black text-[20px] grid place-items-center ml-[28px]">
            2024.03.01 ~ 2025.02.28
          </p>
        </div>

        <div className="flex items-center ml-[154px] max-lg:ml-[0px] max-lg:mt-[20px]">
          <div className="w-[99px] h-[37px] bg-[#DAF3F3] grid place-items-center rounded-[4px] gap-[10px] mr-[8px] font-semibold text-[18px]">
            분류
          </div>
          <TailoredDropdown />

          <div className="w-[99px] h-[37px] bg-[#DAF3F3] grid place-items-center rounded-[4px] gap-[10px] ml-[154px] font-semibold text-[18px] max-lg:ml-[20px]">
            기여도
          </div>
          <img src="/icons/CorrectionPercentbar.svg" alt="기여도 퍼센트바" className="ml-[28px]" />
          <p className="text-[20px] ml-[20px]">{contribution}%</p>
        </div>
      </div>

      {/* AI 첨삭 내용 헤더 */}
      <div className="mb-[40px]">
        <div className="text-[22px] font-semibold">AI 첨삭 내용</div>
        <div className="mt-[10px] border-[#E7E7E7] border-[1px]" />
      </div>

      {/* 첨삭 섹션 */}
      <div className="mb-[40px]">
        <div className="text-[18px] font-semibold mb-[12px]">{title}</div>
        <div className="w-full rounded-[8px] border border-[#E7E7E7] bg-white px-[40px] py-[28px] flex max-lg:flex-col">
          {/* 왼쪽: 원본 내용 */}
          <div className="w-[620px] max-lg:w-full pr-[20px]">
            <div className="space-y-1">
              {contentLines.map((line, index) => renderContentLine(line, index))}
            </div>
          </div>

          {/* 구분선 */}
          <div className="border-l-[2px] border-[#BBBBBB] h-auto min-h-[492px] ml-[40px] mr-[40px] block max-lg:hidden" />
          <div className="w-full border border-[#BBBBBB] hidden max-lg:block max-lg:mt-[32px] max-lg:mb-[36px]" />

          {/* 오른쪽: 첨삭 결과 */}
          <div className="w-[620px] max-lg:w-full">
            {/* 총평 */}
            <div className="w-full min-h-[84px] bg-[#F8F8F8] border border-[#898989] rounded-[6px] px-[20px] py-[16px] mb-[48px]">
              <div className="text-[16px] text-[#666666] mb-[8px]">총평</div>
              <div className="text-[14px] text-[#888888] space-y-1">
                <p>• Type 0 (유지): {reviewResults.filter((r) => r.type === 0).length}개 라인</p>
                <p>
                  • Type 1 (축소/제외): {reviewResults.filter((r) => r.type === 1).length}개 라인
                </p>
                <p>
                  • Type 2 (구체화/강조): {reviewResults.filter((r) => r.type === 2).length}개 라인
                </p>
              </div>
            </div>

            {/* 축소/제외 권고 섹션 */}
            <div className="flex items-center w-full mb-[16px]">
              <ReductionToggle onRToggle={setRToggleOn} />
              <div className="flex ml-[16px]">
                <div className="bg-[#EF7C7C] w-[4px] h-[34px] rounded-l-[4px]"></div>
                <div className="w-[189px] h-[34px] bg-[#D846460D] px-[12px] py-[4px] rounded-r-[4px]">
                  <p className="text-[18px]">축소하거나 제외하세요.</p>
                </div>
              </div>
            </div>

            <div className="text-[14px] mb-[48px] max-h-[200px] overflow-y-auto">
              {reductionComments.length > 0 ? (
                reductionComments.map((comment, index) => (
                  <div key={index} className="mb-[12px]">
                    <span className="text-[16px] font-semibold text-[#EF7C7C]">{index + 1}.</span>
                    <span className="ml-[8px] text-[14px] text-[#333333] leading-relaxed">
                      {comment}
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-[#999999] italic">축소/제외 권고사항이 없습니다.</p>
              )}
            </div>

            {/* 구체화/강조 권고 섹션 */}
            <div className="flex items-center w-full mb-[16px]">
              <ConcretizationToggle onCToggle={setCToggleOn} />
              <div className="flex ml-[16px]">
                <div className="bg-[#97D099] w-[4px] h-[34px] rounded-l-[4px]"></div>
                <div className="w-[260px] h-[34px] bg-[#97D0991A] px-[12px] py-[4px] rounded-r-[4px]">
                  <p className="text-[18px]">내용을 더 구체화하여 강조하세요.</p>
                </div>
              </div>
            </div>

            <div className="text-[14px] w-full max-h-[200px] overflow-y-auto">
              {concretizationComments.length > 0 ? (
                concretizationComments.map((comment, index) => (
                  <div key={index} className="mb-[12px]">
                    <span className="text-[16px] font-semibold text-[#97D099]">{index + 1}.</span>
                    <span className="ml-[8px] text-[14px] text-[#333333] leading-relaxed">
                      {comment}
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-[#999999] italic">구체화/강조 권고사항이 없습니다.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AICorrectionSection;
